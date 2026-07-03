import { create } from "zustand";
import type { Reception } from "../features/receptions/types/reception";
import { receptions as initialReceptions } from "../features/receptions/data/receptions";

interface ReceptionStore {
  receptions: Reception[];

  addReception: (reception: Reception) => void;

  updateReception: (
    id: string,
    data: Partial<Reception>
  ) => void;
}

export const useReceptionStore = create<ReceptionStore>((set) => ({
  receptions: initialReceptions,

  addReception: (reception) =>
    set((state) => ({
      receptions: [...state.receptions, reception],
    })),

  updateReception: (id, data) =>
    set((state) => ({
      receptions: state.receptions.map((reception) =>
        reception.id === id
          ? { ...reception, ...data }
          : reception
      ),
    })),
}));
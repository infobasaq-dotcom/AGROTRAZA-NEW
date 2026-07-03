import { create } from "zustand";

interface AppStore {
  currentReceptionId: string | null;
  currentLotId: string | null;

  setCurrentReception: (id: string | null) => void;
  setCurrentLot: (id: string | null) => void;

  reset: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  currentReceptionId: null,
  currentLotId: null,

  setCurrentReception: (id) =>
    set({
      currentReceptionId: id,
    }),

  setCurrentLot: (id) =>
    set({
      currentLotId: id,
    }),

  reset: () =>
    set({
      currentReceptionId: null,
      currentLotId: null,
    }),
}));
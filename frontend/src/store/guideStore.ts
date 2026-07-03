import { create } from "zustand";
import type { Guide } from "../features/receptions/types/guide";

interface GuideStore {
  guides: Guide[];

  addGuide: (guide: Guide) => void;

  getGuidesByReception: (receptionId: string) => Guide[];

  getPrincipalGuide: (receptionId: string) => Guide | undefined;

  getComplementaryGuides: (receptionId: string) => Guide[];
}

export const useGuideStore = create<GuideStore>((set, get) => ({
  guides: [],

  addGuide: (guide) =>
    set((state) => ({
      guides: [...state.guides, guide],
    })),

  getGuidesByReception: (receptionId) =>
    get().guides.filter(
      (guide) => guide.receptionId === receptionId
    ),

  getPrincipalGuide: (receptionId) =>
    get().guides.find(
      (guide) =>
        guide.receptionId === receptionId &&
        guide.type === "Principal"
    ),

  getComplementaryGuides: (receptionId) =>
    get().guides.filter(
      (guide) =>
        guide.receptionId === receptionId &&
        guide.type === "Complementaria"
    ),
}));
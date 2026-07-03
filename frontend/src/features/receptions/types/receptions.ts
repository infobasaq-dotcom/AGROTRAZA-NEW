export interface Reception {
  id: string;

  receptionDate: string;

  supplier: string;

  product: string;

  variety: string;

  plant: string;

  status:
    | "Borrador"
    | "Completa"
    | "Asignada a lote";

  totalGuides: number;

  totalWeight: number;
}
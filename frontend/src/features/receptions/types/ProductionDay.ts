export interface ProductionDay {

  id: string;

  lotId: string;

  day: number;

  productionDate: string;

  status:
    | "En proceso"
    | "Finalizado";

}
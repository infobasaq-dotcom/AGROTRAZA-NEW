export interface ProductMovement {

  id: string;

  guideId: string;

  lotId: string;

  movementType:
    | "Ingreso"
    | "Producción"
    | "Exportación"
    | "Traspaso Interno"
    | "Mercado Nacional"
    | "Descarte"
    | "Merma";

  weight: number;

  movementDate: string;

  observations: string;

}
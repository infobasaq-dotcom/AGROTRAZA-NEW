export interface Lot {

  id: string;

  code: string;

  date: string;

  status:
    | "Pendiente"
    | "En proceso"
    | "Despachado"
    | "Completado";

  product: string;

  exporter: string;

  importer: string;

  destinationCountry: string;

  plant: string;

  sanitaryAuthorization: string;

  totalDocuments: number;

  completedDocuments: number;

}
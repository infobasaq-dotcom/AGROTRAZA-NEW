export interface Document {

  id: string;

  lotId: string;

  name: string;

  category: string;

  status:
    | "Pendiente"
    | "En revisión"
    | "Aprobado";

  uploadDate: string;

  uploadedBy: string;

  observations: string;

}
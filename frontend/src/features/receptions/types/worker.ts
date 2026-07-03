export interface Worker {

  id: string;

  employeeCode: string;

  documentNumber: string;

  fullName: string;

  role:
    | "Operario de Producción"
    | "Supervisor de Producción"
    | "Estibador";

  active: boolean;

}
export interface DocumentTemplate {

  id: string;

  name: string;

  category:
    | "Recepción"
    | "Producción"
    | "Exportación"
    | "Despacho";

  required: boolean;

}

export const documentTemplates: DocumentTemplate[] = [

  {
    id: "DOC001",
    name: "CERTIFICADO SENASA",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC002",
    name: "ICA",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC003",
    name: "CPI",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC004",
    name: "DECLARACIÓN ADUANERA",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC005",
    name: "PACKING LIST",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC006",
    name: "FACTURA",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC007",
    name: "ETIQUETA",
    category: "Exportación",
    required: true,
  },

  {
    id: "DOC008",
    name: "FOTOGRAFÍAS",
    category: "Despacho",
    required: false,
  },

];
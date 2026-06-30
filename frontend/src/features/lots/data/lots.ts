import type { Lot } from "../types/Lot";

export const lots: Lot[] = [
  {
    id: "1",
    code: "29062026-14-MEN001-095",
    date: "29/06/2026",
    status: "En proceso",

    product: "Cebolla Blanca",

    exporter: "JIBAJA FOODS EIRL",

    importer:
      "COMERCIALIZADORA INTEGRAL DE PRODUCTOS AGRÍCOLAS S.A.S.",

    destinationCountry: "Colombia",

    plant: "MULTISERVICIOS MENOTTI EIRL",

    sanitaryAuthorization: "000014-MIDAGRI-SENASA-TUMBES",

    totalDocuments: 16,

    completedDocuments: 16,
  },

  {
    id: "2",
    code: "29062026-14-MEN001-094",
    date: "28/06/2026",
    status: "Despachado",

    product: "Palta Hass",

    exporter: "JIBAJA FOODS EIRL",

    importer: "IMPORTADORA PERÚ S.A.",

    destinationCountry: "España",

    plant: "MULTISERVICIOS MENOTTI EIRL",

    sanitaryAuthorization: "000014-MIDAGRI-SENASA-TUMBES",

    totalDocuments: 16,

    completedDocuments: 16,
  },

  {
    id: "3",
    code: "28062026-14-MEN001-093",
    date: "27/06/2026",
    status: "Completado",

    product: "Limón Tahití",

    exporter: "JIBAJA FOODS EIRL",

    importer: "Fresh Market SAS",

    destinationCountry: "Chile",

    plant: "MULTISERVICIOS MENOTTI EIRL",

    sanitaryAuthorization: "000014-MIDAGRI-SENASA-TUMBES",

    totalDocuments: 15,

    completedDocuments: 13,
  },
];
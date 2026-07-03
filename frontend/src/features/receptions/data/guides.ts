import type { Guide } from "../types/guide";

export const guides: Guide[] = [

  {
    id: "GUI001",

    receptionId: "REC001",

    type: "Principal",

    guideNumber: "000154",

    guideDate: "2026-07-02",

    supplier: "Agrícola San José",

    product: "Cebolla Blanca",

    variety: "Dulce",

    weight: 18000,

    receivedWeight: 17950,

    hasScaleTicket: true,

    hasInternalTransferGuide: false,

  },

  {
    id: "GUI002",

    receptionId: "REC001",

    type: "Complementaria",

    guideNumber: "000155",

    guideDate: "2026-07-02",

    supplier: "Agro Norte",

    product: "Cebolla Blanca",

    variety: "Dulce",

    weight: 7000,

    receivedWeight: 7000,

    hasScaleTicket: false,

    hasInternalTransferGuide: false,

  },

  {
    id: "GUI003",

    receptionId: "REC002",

    type: "Principal",

    guideNumber: "000201",

    guideDate: "2026-07-03",

    supplier: "Agro Norte",

    product: "Cebolla Blanca",

    variety: "Dulce",

    weight: 18000,

    receivedWeight: 18000,

    hasScaleTicket: false,

    hasInternalTransferGuide: false,

  },

];
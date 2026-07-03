export interface Guide {

  id: string;

  receptionId: string;

  type:
    | "Principal"
    | "Complementaria";

  guideNumber: string;

  guideDate: string;

  supplier: string;

  product: string;

  variety: string;

  weight: number;

  receivedWeight: number;

  hasScaleTicket: boolean;

  hasInternalTransferGuide: boolean;

}
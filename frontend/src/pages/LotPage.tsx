import { useState } from "react";

import { lots } from "../features/lots/data/lots";

import LotHeader from "../features/lots/components/LotHeader";
import LotList from "../features/lots/components/LotList";
import LotInfo from "../features/lots/components/LotInfo";
import DocumentStatus from "../features/lots/components/DocumentStatus";
import DocumentTable from "../features/lots/components/DocumentTable";
import VehicleGallery from "../features/lots/components/VehicleGallery";

export default function LotPage() {
  const [selectedLot] = useState(lots[0]);

  return (
    <div className="space-y-8">

      <LotHeader lot={selectedLot} />

      <div className="flex justify-end">

        <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700">
          + Nuevo Lote
        </button>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-3">
          <LotList />
        </div>

        <div className="col-span-6 space-y-6">
          <LotInfo lot={selectedLot} />
          <DocumentTable />
        </div>

        <div className="col-span-3 space-y-6">
          <DocumentStatus lot={selectedLot} />
        </div>

      </div>

      <VehicleGallery />

    </div>
  );
}
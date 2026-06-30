import { lots } from "../data/lots";
import LotCard from "./LotCard";

export default function LotList() {
  return (
    <div className="rounded-2xl bg-white shadow-lg border border-slate-200 p-5">

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Expedientes
          </h2>

          <p className="text-sm text-slate-500">
            Lotes registrados
          </p>

        </div>

        <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
          {lots.length}
        </span>

      </div>

      <div className="space-y-4">

        {lots.map((lot, index) => (
          <LotCard
            key={lot.id}
            lot={lot}
            selected={index === 0}
          />
        ))}

      </div>

    </div>
  );
}
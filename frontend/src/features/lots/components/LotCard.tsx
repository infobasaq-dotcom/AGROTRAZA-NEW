import {
  Calendar,
  Globe,
  Package,
  ChevronRight,
} from "lucide-react";

import type { Lot } from "../types/lot";

type Props = {
  lot: Lot;
  selected: boolean;
  onClick: () => void;
};

const statusStyles = {
  Pendiente:
    "bg-red-100 text-red-700 border-red-300",

  "En proceso":
    "bg-amber-100 text-amber-700 border-amber-300",

  Despachado:
    "bg-blue-100 text-blue-700 border-blue-300",

  Completado:
    "bg-green-100 text-green-700 border-green-300",
};

export default function LotCard({
  lot,
  selected,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
        selected
          ? "border-green-600 ring-2 ring-green-300 shadow-xl scale-[1.02]"
          : "border-slate-200 hover:border-green-500 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      <div className="h-2 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400" />

      <div className="p-5">

        <div className="flex items-start justify-between">

          <div>
            <h3 className="text-lg font-bold text-slate-800">
              {lot.code}
            </h3>

            <p className="mt-1 font-semibold text-green-700">
              {lot.product}
            </p>
          </div>

          <ChevronRight
            size={20}
            className="text-slate-400"
          />

        </div>

        <span
          className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
            statusStyles[lot.status]
          }`}
        >
          {lot.status}
        </span>

        <div className="mt-5 space-y-2 text-sm text-slate-600">

          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>{lot.destinationCountry}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{lot.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Package size={16} />
            <span>{lot.exporter}</span>
          </div>

        </div>

      </div>

    </button>
  );
}
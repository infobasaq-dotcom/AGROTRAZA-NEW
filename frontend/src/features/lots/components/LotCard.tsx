import {
  Calendar,
  Globe,
  Package,
  ChevronRight,
} from "lucide-react";

import type { Lot } from "../types/Lot";

type Props = {
  lot: Lot;
  selected?: boolean;
  onClick?: () => void;
};

export default function LotCard({
  lot,
  selected = false,
  onClick,
}: Props) {
  const statusColor = {
    "En proceso":
      "bg-amber-100 text-amber-700 border-amber-300",

    Despachado:
      "bg-blue-100 text-blue-700 border-blue-300",

    Completado:
      "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border transition-all duration-300 text-left overflow-hidden group
      ${
        selected
          ? "border-green-600 shadow-xl scale-[1.02]"
          : "border-slate-200 hover:border-green-500 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {/* Barra superior */}

      <div className="h-2 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400" />

      <div className="p-5">

        {/* Código */}

        <div className="flex justify-between items-start">

          <div>

            <h3 className="font-bold text-slate-800 text-lg">
              {lot.code}
            </h3>

            <p className="text-green-700 font-semibold mt-1">
              {lot.product}
            </p>

          </div>

          <ChevronRight
            size={22}
            className="text-slate-400 group-hover:text-green-600 transition"
          />

        </div>

        {/* Estado */}

        <span
          className={`inline-flex mt-4 rounded-full border px-3 py-1 text-xs font-bold ${
            statusColor[
              lot.status as keyof typeof statusColor
            ]
          }`}
        >
          {lot.status}
        </span>

        {/* Información */}

        <div className="mt-5 space-y-3 text-sm">

          <div className="flex items-center gap-2 text-slate-600">

            <Globe size={16} />

            <span>{lot.destinationCountry}</span>

          </div>

          <div className="flex items-center gap-2 text-slate-600">

            <Calendar size={16} />

            <span>{lot.date}</span>

          </div>

          <div className="flex items-center gap-2 text-slate-600">

            <Package size={16} />

            <span>{lot.exporter}</span>

          </div>

        </div>

      </div>

    </button>
  );
}
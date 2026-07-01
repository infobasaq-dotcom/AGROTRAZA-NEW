import {
  CheckCircle2,
  Clock3,
  FileText,
  TrendingUp,
} from "lucide-react";

import type { Lot } from "../types/Lot";

type Props = {
  lot: Lot;
};

export default function DocumentStatus({ lot }: Props) {
  const percentage = Math.round(
    (lot.completedDocuments / lot.totalDocuments) * 100
  );

  const pending =
    lot.totalDocuments - lot.completedDocuments;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg">

      <div className="border-b p-6">

        <h2 className="text-2xl font-bold text-slate-800">
          Estado Documental
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Seguimiento del expediente
        </p>

      </div>

      <div className="flex justify-center p-8">

        <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-green-500">

          <div className="text-center">

            <div className="text-4xl font-black text-green-700">
              {percentage}%
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Completado
            </div>

          </div>

        </div>

      </div>

      <div className="px-6">

        <div className="mb-6 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-400"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      <div className="space-y-4 px-6 pb-6">

        <StatusCard
          icon={<CheckCircle2 size={20} />}
          color="green"
          title="Documentos completos"
          value={lot.completedDocuments}
        />

        <StatusCard
          icon={<Clock3 size={20} />}
          color="amber"
          title="Pendientes"
          value={pending}
        />

        <StatusCard
          icon={<FileText size={20} />}
          color="blue"
          title="Total de documentos"
          value={lot.totalDocuments}
        />

        <StatusCard
          icon={<TrendingUp size={20} />}
          color="emerald"
          title="Nivel de cumplimiento"
          value={`${percentage}%`}
        />

      </div>

    </div>
  );
}

type StatusCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: "green" | "amber" | "blue" | "emerald";
};

function StatusCard({
  icon,
  title,
  value,
  color,
}: StatusCardProps) {
  const colors = {
    green:
      "bg-green-100 text-green-700",

    amber:
      "bg-amber-100 text-amber-700",

    blue:
      "bg-blue-100 text-blue-700",

    emerald:
      "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">

      <div className="flex items-center gap-3">

        <div
          className={`rounded-lg p-2 ${colors[color]}`}
        >
          {icon}
        </div>

        <span className="font-medium text-slate-700">
          {title}
        </span>

      </div>

      <span className="text-lg font-bold text-slate-800">
        {value}
      </span>

    </div>
  );
}
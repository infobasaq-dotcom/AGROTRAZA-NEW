import {
  Calendar,
  Globe,
  Package,
  Ship,
  Leaf,
  Building2,
  BadgeCheck,
} from "lucide-react";

import type { Lot } from "../types/Lot";

type Props = {
  lot: Lot;
};

export default function LotHeader({ lot }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 shadow-2xl">

      {/* Cabecera */}

      <div className="flex items-start justify-between p-8 text-white">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">

            <Leaf size={42} />

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.30em] text-green-100">
              Expediente de Exportación
            </p>

            <h1 className="mt-2 text-5xl font-black">
              {lot.product}
            </h1>

            <p className="mt-2 text-green-100">
              Código del expediente:
              <span className="ml-2 font-bold text-white">
                {lot.code}
              </span>
            </p>

          </div>

        </div>

        <div className="text-right">

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-bold text-green-700 shadow-lg">

            <BadgeCheck size={18} />

            {lot.status}

          </span>

        </div>

      </div>

      {/* KPIs */}

      <div className="grid grid-cols-5 gap-4 border-t border-white/15 bg-black/10 p-6">

        <InfoCard
          icon={<Package size={22} />}
          title="Producto"
          value={lot.product}
        />

        <InfoCard
          icon={<Calendar size={22} />}
          title="Fecha"
          value={lot.date}
        />

        <InfoCard
          icon={<Ship size={22} />}
          title="Exportador"
          value={lot.exporter}
        />

        <InfoCard
          icon={<Globe size={22} />}
          title="Destino"
          value={lot.destinationCountry}
        />

        <InfoCard
          icon={<Building2 size={22} />}
          title="Planta"
          value={lot.plant}
        />

      </div>

    </div>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function InfoCard({
  icon,
  title,
  value,
}: CardProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 text-white backdrop-blur">

      <div className="flex items-center gap-2 text-green-100">

        {icon}

        <span className="text-sm font-medium">
          {title}
        </span>

      </div>

      <p className="mt-3 text-lg font-bold leading-snug">
        {value}
      </p>

    </div>
  );
}
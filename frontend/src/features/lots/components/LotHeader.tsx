import {
  Calendar,
  Globe,
  Package,
  Ship,
  Leaf,
} from "lucide-react";

import type { Lot } from "../types/Lot";

type Props = {
  lot: Lot;
};

export default function LotHeader({ lot }: Props) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white shadow-xl p-8">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">

              <Leaf size={34} />

            </div>

            <div>

              <p className="text-sm uppercase tracking-widest opacity-80">
                Expediente del Lote
              </p>

              <h1 className="text-4xl font-black mt-1">
                {lot.product}
              </h1>

            </div>

          </div>

        </div>

        <span className="bg-white text-green-700 px-5 py-2 rounded-full font-bold shadow-lg">
          {lot.status}
        </span>

      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <InfoCard
          icon={<Package size={22} />}
          title="Código"
          value={lot.code}
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
    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">

      <div className="flex items-center gap-2 opacity-90">

        {icon}

        <span className="text-sm">
          {title}
        </span>

      </div>

      <p className="font-bold mt-3">
        {value}
      </p>

    </div>
  );
}
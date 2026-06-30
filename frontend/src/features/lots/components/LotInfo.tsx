import type { Lot } from "../types/Lot";

type Props = {
  lot: Lot | null;
};

export default function LotInfo({ lot }: Props) {
  if (!lot) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-8">
        <p className="text-slate-500">
          Selecciona un lote para visualizar su información.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            {lot.code}
          </h2>

          <p className="text-slate-500 mt-1">
            Información General
          </p>

        </div>

        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
          {lot.status}
        </span>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <InfoItem
          title="Producto"
          value={lot.product}
        />

        <InfoItem
          title="Fecha"
          value={lot.date}
        />

        <InfoItem
          title="Exportador"
          value={lot.exporter}
        />

        <InfoItem
          title="Importador"
          value={lot.importer}
        />

        <InfoItem
          title="Destino"
          value={lot.destinationCountry}
        />

        <InfoItem
          title="Planta"
          value={lot.plant}
        />

      </div>

    </div>
  );
}

type ItemProps = {
  title: string;
  value: string;
};

function InfoItem({ title, value }: ItemProps) {
  return (
    <div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="font-semibold text-slate-800 mt-1">
        {value}
      </p>

    </div>
  );
}
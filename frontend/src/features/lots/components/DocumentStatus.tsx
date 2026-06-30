import type { Lot } from "../types/Lot";

type Props = {
  lot: Lot;
};

export default function DocumentStatus({ lot }: Props) {
  const percentage = Math.round(
    (lot.completedDocuments / lot.totalDocuments) * 100
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 h-full">

      <h2 className="text-xl font-bold mb-6">
        Estado Documental
      </h2>

      <div className="flex justify-center">

        <div className="w-36 h-36 rounded-full border-8 border-green-500 flex items-center justify-center">

          <div className="text-center">

            <div className="text-3xl font-bold text-green-700">
              {percentage}%
            </div>

            <div className="text-sm text-slate-500">
              Completo
            </div>

          </div>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">

          <span className="text-green-700 font-medium">
            ✔ Documentos completos
          </span>

          <span className="font-bold">
            {lot.completedDocuments}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-orange-600 font-medium">
            ⏳ Pendientes
          </span>

          <span className="font-bold">
            {lot.totalDocuments - lot.completedDocuments}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Total
          </span>

          <span className="font-bold">
            {lot.totalDocuments}
          </span>

        </div>

      </div>

    </div>
  );
}
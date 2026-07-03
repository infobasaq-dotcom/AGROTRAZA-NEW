import type { ProductionTable } from "../../receptions/types/productionTable";

type Props = {
  table: ProductionTable;
};

export default function TableCard({
  table,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition cursor-pointer">

      <h3 className="text-xl font-bold text-slate-800">
        {table.name}
      </h3>

      <p className="mt-2 text-slate-500">
        Seleccionar trabajadores
      </p>

    </div>
  );
}
import ProductionWorkspace from "../features/production/components/ProductionWorkspace";

export default function ProductionPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Producción
        </h1>

        <p className="mt-2 text-slate-500">
          Registro diario del personal de producción por mesa.
        </p>

      </div>

      <ProductionWorkspace />

    </div>
  );
}
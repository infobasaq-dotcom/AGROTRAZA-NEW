export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h3 className="text-lg font-semibold mb-4">
        Acciones rápidas
      </h3>

      <div className="space-y-3">

        <button className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-3">
          Nuevo Lote
        </button>

        <button className="w-full border rounded-lg py-3">
          Ver Lotes
        </button>

        <button className="w-full border rounded-lg py-3">
          Documentos
        </button>

      </div>

    </div>
  );
}
import { receptions } from "../features/receptions/data/receptions";

export default function NewLotPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Crear Nuevo Lote
        </h1>

        <p className="mt-2 text-slate-500">
          Seleccione una recepción para generar un nuevo expediente de lote.
        </p>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-xl font-bold mb-6">
          Recepción
        </h2>

        <div>

          <label className="block mb-2 font-medium">
            Recepción
          </label>

          <select className="w-full rounded-xl border border-slate-300 p-3">

            {receptions.map((reception) => (

              <option
                key={reception.id}
              >
                {reception.id} - {reception.product} - {reception.supplier}
              </option>

            ))}

          </select>

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold">

            Cancelar

          </button>

          <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">

            Continuar

          </button>

        </div>

      </div>

    </div>
  );
}
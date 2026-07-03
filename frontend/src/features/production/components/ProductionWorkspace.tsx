import { useState } from "react";

import TableGrid from "./TableGrid";
import WorkerSelector from "./WorkerSelector";

export default function ProductionWorkspace() {

  const [started, setStarted] = useState(false);

  return (
    <div className="space-y-6">

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold">
          Iniciar Jornada de Producción
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-6">

          <div>

            <label className="block mb-2 font-medium">
              Lote
            </label>

            <select className="w-full rounded-xl border border-slate-300 p-3">

              <option>
                MEN001-095
              </option>

              <option>
                MEN001-096
              </option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Supervisor
            </label>

            <select className="w-full rounded-xl border border-slate-300 p-3">

              <option>
                María López
              </option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Fecha
            </label>

            <input
              type="date"
              className="w-full rounded-xl border border-slate-300 p-3"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Día de Producción
            </label>

            <select className="w-full rounded-xl border border-slate-300 p-3">

              <option>Día 1</option>
              <option>Día 2</option>
              <option>Día 3</option>

            </select>

          </div>

        </div>

        <div className="mt-6 flex justify-end">

          <button
            onClick={() => setStarted(true)}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Iniciar Jornada
          </button>

        </div>

      </div>

      {started && (

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8">

            <TableGrid />

          </div>

          <div className="col-span-4">

            <WorkerSelector />

          </div>

        </div>

      )}

    </div>
  );

}
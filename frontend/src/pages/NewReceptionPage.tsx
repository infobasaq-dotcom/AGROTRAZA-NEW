import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useReceptionStore } from "../store/receptionStore";
import { useAppStore } from "../store/appStore";

export default function NewReceptionPage() {
  const navigate = useNavigate();

  const addReception = useReceptionStore((state) => state.addReception);

  const setCurrentReception = useAppStore(
    (state) => state.setCurrentReception
  );

  const [receptionDate, setReceptionDate] = useState("");
  const [plant, setPlant] = useState("MEN001");

  function handleSave() {
    const receptionId = `REC${Date.now()}`;

    addReception({
      id: receptionId,
      receptionDate,
      supplier: "Pendiente",
      product: "Pendiente",
      variety: "Pendiente",
      plant,
      status: "Borrador",
      totalGuides: 0,
      totalWeight: 0,
    });

    setCurrentReception(receptionId);

    navigate("/nueva-guia");
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Nueva Recepción
        </h1>

        <p className="mt-2 text-slate-500">
          Información general de la recepción.
        </p>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="mb-6 text-xl font-bold">
          Información General
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="mb-2 block font-medium">
              Fecha de recepción
            </label>

            <input
              type="date"
              value={receptionDate}
              onChange={(e) => setReceptionDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Planta
            </label>

            <select
              value={plant}
              onChange={(e) => setPlant(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            >
              <option value="MEN001">
                MEN001 - Multiservicios Menotti
              </option>
            </select>

          </div>

        </div>

        <div className="mt-10 flex justify-end gap-4">

          <button
            onClick={() => navigate("/recepciones")}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Guardar y Continuar
          </button>

        </div>

      </div>

    </div>
  );
}
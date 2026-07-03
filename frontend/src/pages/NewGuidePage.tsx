import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useGuideStore } from "../store/guideStore";
import { useReceptionStore } from "../store/receptionStore";
import { useAppStore } from "../store/appStore";

export default function NewGuidePage() {
  const navigate = useNavigate();

  const addGuide = useGuideStore((state) => state.addGuide);

  const updateReception = useReceptionStore(
    (state) => state.updateReception
  );

  const currentReceptionId = useAppStore(
    (state) => state.currentReceptionId
  );

  const [guideNumber, setGuideNumber] = useState("");
  const [guideDate, setGuideDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState("");
  const [variety, setVariety] = useState("");
  const [weight, setWeight] = useState("");

  function handleSave() {
    if (!currentReceptionId) {
      alert("No existe una recepción activa.");
      return;
    }

    const totalWeight = Number(weight);

    addGuide({
      id: `GUI${Date.now()}`,
      receptionId: currentReceptionId,
      type: "Principal",
      guideNumber,
      guideDate,
      supplier,
      product,
      variety,
      weight: totalWeight,
      receivedWeight: totalWeight,
      hasScaleTicket: false,
      hasInternalTransferGuide: false,
    });

    updateReception(currentReceptionId, {
      supplier,
      product,
      variety,
      totalGuides: 1,
      totalWeight,
      status: "Completa",
    });

    navigate("/recepciones");
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Guía Principal
        </h1>

        <p className="mt-2 text-slate-500">
          Registro de la guía principal de la recepción.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">Número de Guía</label>
            <input
              value={guideNumber}
              onChange={(e) => setGuideNumber(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Fecha de Guía</label>
            <input
              type="date"
              value={guideDate}
              onChange={(e) => setGuideDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Proveedor</label>
            <input
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Producto</label>
            <input
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Variedad</label>
            <input
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Peso (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            />
          </div>

        </div>

        <div className="mt-10 flex justify-end gap-4">

          <button
            onClick={() => navigate("/recepciones")}
            className="rounded-xl border border-slate-300 px-6 py-3"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Guardar Guía
          </button>

        </div>

      </div>

    </div>
  );
}
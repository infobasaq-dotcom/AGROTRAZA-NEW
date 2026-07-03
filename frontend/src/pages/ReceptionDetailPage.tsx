import { useNavigate, useParams } from "react-router-dom";

import { useReceptionStore } from "../store/receptionStore";
import { useGuideStore } from "../store/guideStore";
import { useAppStore } from "../store/appStore";

export default function ReceptionDetailPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const receptions = useReceptionStore((state) => state.receptions);
  const guides = useGuideStore((state) => state.guides);

  const setCurrentReception = useAppStore(
    (state) => state.setCurrentReception
  );

  const reception = receptions.find(
    (r) => r.id === (id ?? "")
  );

  const receptionGuides = guides.filter(
    (g) => g.receptionId === (id ?? "")
  );

  if (!reception) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Recepción no encontrada
        </h1>
      </div>
    );
  }

  function handleNewGuide() {
    setCurrentReception(reception.id);
    navigate("/nueva-guia");
  }

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Recepción {reception.id}
          </h1>

          <p className="mt-2 text-slate-500">
            Administración de guías.
          </p>

        </div>

        <button
          onClick={handleNewGuide}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          + Agregar Guía
        </button>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

        <div className="grid grid-cols-2 gap-6">

          <div>
            <strong>Proveedor:</strong> {reception.supplier}
          </div>

          <div>
            <strong>Producto:</strong> {reception.product}
          </div>

          <div>
            <strong>Total Guías:</strong> {reception.totalGuides}
          </div>

          <div>
            <strong>Peso Total:</strong> {reception.totalWeight} kg
          </div>

          <div>
            <strong>Estado:</strong> {reception.status}
          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Guía</th>
              <th className="p-4 text-left">Proveedor</th>
              <th className="p-4 text-left">Peso</th>

            </tr>

          </thead>

          <tbody>

            {receptionGuides.map((guide) => (

              <tr
                key={guide.id}
                className="border-t"
              >

                <td className="p-4">
                  {guide.type}
                </td>

                <td className="p-4">
                  {guide.guideNumber}
                </td>

                <td className="p-4">
                  {guide.supplier}
                </td>

                <td className="p-4">
                  {guide.weight} kg
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
import { useNavigate } from "react-router-dom";

import { useReceptionStore } from "../store/receptionStore";

export default function ReceptionPage() {
  const navigate = useNavigate();

  const receptions = useReceptionStore((state) => state.receptions);

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Recepciones
          </h1>

          <p className="mt-2 text-slate-500">
            Registre y administre todas las recepciones de materia prima.
          </p>

        </div>

        <button
          onClick={() => navigate("/nueva-recepcion")}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          + Nueva Recepción
        </button>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Fecha</th>

              <th className="p-4 text-left">Proveedor</th>

              <th className="p-4 text-left">Producto</th>

              <th className="p-4 text-left">Guías</th>

              <th className="p-4 text-left">Peso Total</th>

              <th className="p-4 text-left">Estado</th>

            </tr>

          </thead>

          <tbody>

            {receptions.map((reception) => (

              <tr
                key={reception.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">
                  {reception.receptionDate}
                </td>

                <td className="p-4">
                  {reception.supplier}
                </td>

                <td className="p-4">
                  {reception.product}
                </td>

                <td className="p-4">
                  {reception.totalGuides}
                </td>

                <td className="p-4">
                  {reception.totalWeight.toLocaleString()} kg
                </td>

                <td className="p-4">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {reception.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
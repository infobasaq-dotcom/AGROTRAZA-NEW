 import {
  FileText,
  Eye,
  Download,
  Search,
} from "lucide-react";

type DocumentItem = {
  id: number;
  name: string;
  folder: string;
  status: "Completo" | "Pendiente";
  date: string;
};

const documents: DocumentItem[] = [
  {
    id: 1,
    name: "CERTIFICADO SENASA",
    folder: "01_SENASA",
    status: "Completo",
    date: "25/06/2026",
  },
  {
    id: 2,
    name: "ICA - REQUISITOS FITOSANITARIOS",
    folder: "02_ADUANA_EXPORT",
    status: "Completo",
    date: "25/06/2026",
  },
  {
    id: 3,
    name: "CPI - CARTA DE PORTE",
    folder: "02_ADUANA_EXPORT",
    status: "Completo",
    date: "25/06/2026",
  },
  {
    id: 4,
    name: "DECLARACIÓN ADUANERA",
    folder: "02_ADUANA_EXPORT",
    status: "Pendiente",
    date: "-",
  },
];

export default function DocumentTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg">

      <div className="flex items-center justify-between border-b p-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Documentos del Expediente
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Control documental del lote seleccionado
          </p>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Buscar documento..."
            className="rounded-xl border border-slate-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none"
          />

        </div>

      </div>

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">#</th>

            <th className="p-4 text-left">
              Documento
            </th>

            <th className="p-4 text-left">
              Carpeta
            </th>

            <th className="p-4 text-left">
              Estado
            </th>

            <th className="p-4 text-left">
              Fecha
            </th>

            <th className="p-4 text-center">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody>

          {documents.map((doc) => (

            <tr
              key={doc.id}
              className="border-t transition hover:bg-green-50"
            >

              <td className="p-4 font-semibold">
                {doc.id}
              </td>

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-green-100 p-2">

                    <FileText
                      size={18}
                      className="text-green-700"
                    />

                  </div>

                  <span className="font-semibold text-slate-700">
                    {doc.name}
                  </span>

                </div>

              </td>

              <td className="p-4 text-slate-500">
                {doc.folder}
              </td>

              <td className="p-4">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    doc.status === "Completo"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {doc.status}
                </span>

              </td>

              <td className="p-4">
                {doc.date}
              </td>

              <td className="p-4">

                <div className="flex justify-center gap-2">

                  <button className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200">
                    <Eye size={18} />
                  </button>

                  <button className="rounded-lg bg-green-100 p-2 text-green-700 transition hover:bg-green-200">
                    <Download size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
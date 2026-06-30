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
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-xl font-bold mb-5">
        Resumen Documental
      </h2>

      <table className="w-full">

        <thead className="border-b bg-slate-50">

          <tr>

            <th className="text-left p-3">#</th>

            <th className="text-left p-3">Documento</th>

            <th className="text-left p-3">Carpeta</th>

            <th className="text-left p-3">Estado</th>

            <th className="text-left p-3">Fecha</th>

          </tr>

        </thead>

        <tbody>

          {documents.map((doc) => (

            <tr
              key={doc.id}
              className="border-b hover:bg-green-50 transition"
            >

              <td className="p-3">
                {doc.id}
              </td>

              <td className="p-3 font-medium">
                {doc.name}
              </td>

              <td className="p-3 text-slate-500">
                {doc.folder}
              </td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    doc.status === "Completo"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {doc.status}
                </span>

              </td>

              <td className="p-3">
                {doc.date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
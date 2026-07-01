import {
  Camera,
  CheckCircle2,
  ImagePlus,
} from "lucide-react";

type PhotoItem = {
  id: number;
  title: string;
  status: "Registrada" | "Pendiente";
};

const photos: PhotoItem[] = [
  {
    id: 1,
    title: "Frontal del Vehículo",
    status: "Registrada",
  },
  {
    id: 2,
    title: "Lateral Izquierdo",
    status: "Registrada",
  },
  {
    id: 3,
    title: "Lateral Derecho",
    status: "Pendiente",
  },
  {
    id: 4,
    title: "Parte Posterior",
    status: "Pendiente",
  },
  {
    id: 5,
    title: "Carga del Producto",
    status: "Registrada",
  },
  {
    id: 6,
    title: "Sellado del Contenedor",
    status: "Pendiente",
  },
];

export default function VehicleGallery() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg">

      <div className="flex items-center justify-between border-b p-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Evidencias Fotográficas
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Registro fotográfico del despacho
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700">

          <ImagePlus size={18} />

          Agregar fotografía

        </button>

      </div>

      <div className="grid grid-cols-3 gap-6 p-6">

        {photos.map((photo) => (

          <div
            key={photo.id}
            className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">

              <Camera
                size={60}
                className="text-slate-400"
              />

            </div>

            <div className="p-5">

              <h3 className="font-bold text-slate-800">
                {photo.title}
              </h3>

              <div className="mt-4 flex items-center justify-between">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    photo.status === "Registrada"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {photo.status}
                </span>

                {photo.status === "Registrada" && (
                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
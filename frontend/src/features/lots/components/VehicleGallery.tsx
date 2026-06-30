export default function VehicleGallery() {
  const photos = [
    "Frontal",
    "Lateral Izquierda",
    "Lateral Derecha",
    "Trasera",
  ];

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-xl font-bold mb-6">
        Fotografías del Vehículo
      </h2>

      <div className="grid grid-cols-4 gap-5">

        {photos.map((photo) => (

          <div
            key={photo}
            className="rounded-xl border-2 border-dashed border-green-300 bg-green-50 h-56 flex flex-col items-center justify-center hover:bg-green-100 transition"
          >

            <div className="text-5xl">
              📷
            </div>

            <p className="mt-4 font-semibold text-slate-700">
              {photo}
            </p>

            <span className="mt-2 text-sm text-slate-500">
              Sin imagen
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
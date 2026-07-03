import { workers } from "../data/workers";

export default function WorkerSelector() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Personal disponible
      </h2>

      <div className="mt-6 space-y-3">

        {workers.map((worker) => (

          <label
            key={worker.id}
            className="flex items-center gap-3 rounded-lg border p-3 hover:bg-slate-50 cursor-pointer"
          >

            <input
              type="checkbox"
              className="h-5 w-5"
            />

            <div>

              <p className="font-semibold">
                {worker.fullName}
              </p>

              <p className="text-sm text-slate-500">
                {worker.role}
              </p>

            </div>

          </label>

        ))}

      </div>

    </div>
  );
}
export default function LotProgress() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Avance del Expediente
      </h2>

      <div className="mt-8 flex items-center justify-between">

        <Step
          title="Recepción"
          completed
        />

        <Step
          title="Producción"
          completed
        />

        <Step
          title="Documentos"
        />

        <Step
          title="SENASA"
        />

        <Step
          title="Despacho"
        />

      </div>

    </div>
  );
}

type StepProps = {
  title: string;
  completed?: boolean;
};

function Step({
  title,
  completed,
}: StepProps) {
  return (
    <div className="flex flex-col items-center">

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
          completed
            ? "bg-green-600"
            : "bg-slate-300"
        }`}
      >
        ✓
      </div>

      <p className="mt-3 text-sm font-medium text-center">
        {title}
      </p>

    </div>
  );
}
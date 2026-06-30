const cards = [
  {
    title: "Lotes Activos",
    value: 12,
  },
  {
    title: "En Proceso",
    value: 5,
  },
  {
    title: "Despachados",
    value: 84,
  },
  {
    title: "Documentos Pendientes",
    value: 3,
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-sm p-6 border"
        >
          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}

    </div>
  );
}
const lots = [
  "29062026-14-MEN001-095",
  "29062026-14-MEN001-094",
  "28062026-14-MEN001-093",
];

export default function RecentLots() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h3 className="text-lg font-semibold mb-4">
        Últimos Lotes
      </h3>

      <div className="space-y-3">

        {lots.map((lot) => (
          <div
            key={lot}
            className="border rounded-lg px-4 py-3 flex justify-between"
          >
            <span>{lot}</span>

            <span className="text-green-700 font-medium">
              En proceso
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}
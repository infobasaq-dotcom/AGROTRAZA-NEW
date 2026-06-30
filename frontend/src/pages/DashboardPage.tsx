import DashboardCards from "../components/dashboard/DashboardCards";
import QuickActions from "../components/dashboard/QuickActions";
import RecentLots from "../components/dashboard/RecentLots";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-slate-500 mt-1">
          Bienvenido a AGROTRAZA NEW 1.0
        </p>
      </div>

      <DashboardCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <RecentLots />

        <QuickActions />

      </div>

    </div>
  );
}
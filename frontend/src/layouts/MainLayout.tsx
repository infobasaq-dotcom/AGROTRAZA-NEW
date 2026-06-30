import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Boxes,
  FileText,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

type MainLayoutProps = {
  children: ReactNode;
};

const menu = [
  {
    icon: LayoutDashboard,
    text: "Dashboard",
    path: "/",
  },
  {
    icon: Boxes,
    text: "Lotes",
    path: "/lotes",
  },
  {
    icon: FileText,
    text: "Documentos",
    path: "/documentos",
  },
  {
    icon: Users,
    text: "Usuarios",
    path: "/usuarios",
  },
  {
    icon: BarChart3,
    text: "Reportes",
    path: "/reportes",
  },
  {
    icon: Settings,
    text: "Configuración",
    path: "/configuracion",
  },
];

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-100">

      <aside className="w-64 bg-green-800 text-white flex flex-col">

        <div className="h-16 flex items-center px-6 border-b border-green-700">

          <h1 className="text-2xl font-extrabold tracking-wide">
            🌿 AGROTRAZA
          </h1>

        </div>

        <nav className="flex-1 py-4">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.text}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-6 py-3 transition ${
                    isActive
                      ? "bg-green-900 font-semibold"
                      : "hover:bg-green-700"
                  }`
                }
              >
                <Icon size={20} />
                {item.text}
              </NavLink>
            );
          })}

        </nav>

      </aside>

      <div className="flex flex-col flex-1">

        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">

          <div>

            <h2 className="font-bold text-slate-700">
              Sistema de Trazabilidad
            </h2>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center font-bold shadow">
              I4
            </div>

            <div>

              <p className="font-semibold text-slate-800">
                Ingenia4
              </p>

              <p className="text-xs text-slate-500">
                Administrador
              </p>

            </div>

          </div>

        </header>

        <main className="flex-1 overflow-auto p-8">

          {children}

        </main>

      </div>

    </div>
  );
}
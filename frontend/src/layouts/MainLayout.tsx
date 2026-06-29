import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="h-16 bg-green-700 text-white flex items-center justify-between px-6 shadow-md">
        <h1 className="text-xl font-bold">
          🌿 AGROTRAZA NEW 1.0
        </h1>

        <div className="text-sm">
          Usuario
        </div>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
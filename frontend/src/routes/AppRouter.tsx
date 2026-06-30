import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LotPage from "../pages/LotPage";
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />

        <Route
          path="/lotes"
          element={
            <MainLayout>
              <LotPage />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
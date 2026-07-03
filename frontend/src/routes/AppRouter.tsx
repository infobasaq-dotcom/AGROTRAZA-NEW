import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import ReceptionPage from "../pages/ReceptionPage";
import NewReceptionPage from "../pages/NewReceptionPage";
import NewGuidePage from "../pages/NewGuidePage";
import LotPage from "../pages/LotPage";
import NewLotPage from "../pages/NewLotPage";
import ProductionPage from "../pages/ProductionPage";

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
          path="/recepciones"
          element={
            <MainLayout>
              <ReceptionPage />
            </MainLayout>
          }
        />

        <Route
          path="/nueva-recepcion"
          element={
            <MainLayout>
              <NewReceptionPage />
            </MainLayout>
          }
        />

        <Route
          path="/nueva-guia"
          element={
            <MainLayout>
              <NewGuidePage />
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

        <Route
          path="/nuevo-lote"
          element={
            <MainLayout>
              <NewLotPage />
            </MainLayout>
          }
        />

        <Route
          path="/produccion"
          element={
            <MainLayout>
              <ProductionPage />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
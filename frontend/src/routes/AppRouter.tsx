import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/DashboardPage";
import ReceptionPage from "../pages/ReceptionPage";
import NewReceptionPage from "../pages/NewReceptionPage";
import ReceptionDetailPage from "../pages/ReceptionDetailPage";
import NewGuidePage from "../pages/NewGuidePage";
import LotPage from "../pages/LotPage";
import NewLotPage from "../pages/NewLotPage";
import ProductionPage from "../pages/ProductionPage";

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
          path="/recepciones/:id"
          element={
            <MainLayout>
              <ReceptionDetailPage />
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
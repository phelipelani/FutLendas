import { Route, Routes } from "react-router-dom";
import { InicialPage } from "../Pages/Inicial";
import { PerfilPage } from "../Pages/Perfil";
import { RegisterPage } from "../Pages/Register";
import { CartolendasPage } from "../Pages/Cartolendas";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InicialPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cartolendas" element={<CartolendasPage />} />

      
    </Routes>
  );
};

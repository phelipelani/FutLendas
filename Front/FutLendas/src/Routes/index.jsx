import { Route, Routes } from "react-router-dom";
import { InicialPage } from "../Pages/Inicial";
import { PerfilPage } from "../Pages/Perfil";
import { RegisterPage } from "../Pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InicialPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

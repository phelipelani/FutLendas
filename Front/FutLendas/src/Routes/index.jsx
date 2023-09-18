import { Route, Routes } from "react-router-dom";
import { InicialPage } from "../Pages/Inicial";
import { PerfilPage } from "../Pages/Perfil";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InicialPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import { InicialPage } from "../Pages/Inicial";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InicialPage />} />
    </Routes>
  );
};

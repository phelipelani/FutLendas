import {
  ContainerStyled,
  MainStyled,
} from "./styled";

import { FooterComponent } from "../../Components/Footer";
import { BannerUsuario } from "../../Components/DadosUsuario";
import { Cabecalho } from "../../Components/Cabecalho";

export const PerfilPage = () => {
  return (
    <MainStyled>
      <Cabecalho />
      <ContainerStyled>
        <div className="infoLateralEsquerda"></div>
        <BannerUsuario />
        <div className="infoLateralDireita"></div>
      </ContainerStyled>

      <FooterComponent />
    </MainStyled>
  );
};

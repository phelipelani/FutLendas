import {
  CabecalhoExitStyled,
  CabecalhoLogoStyled,
  CabecalhoNavStyled,
  CabecalhoStyled,
  ContainerStyled,
  MainStyled,
} from "./styled";
import Logo from "../../Assets/Logo.png";
import { FooterComponent } from "../../Components/Footer";
import { BannerUsuario } from "../../Components/DadosUsuario";

export const PerfilPage = () => {
  return (
    <MainStyled>
      <CabecalhoStyled>
        <CabecalhoLogoStyled>
          <img src={Logo} alt="Logo Fut Lendas" />
        </CabecalhoLogoStyled>
        <CabecalhoNavStyled>
          <p>Perfil</p>
          <p>Ligas</p>
          <p>Cartolendas</p>
        </CabecalhoNavStyled>
        <CabecalhoExitStyled>
          <p>Sair</p>
        </CabecalhoExitStyled>
      </CabecalhoStyled>
      <ContainerStyled>
        <div className="infoLateralEsquerda"></div>
        <BannerUsuario />
        <div className="infoLateralDireita"></div>
      </ContainerStyled>

      <FooterComponent />
    </MainStyled>
  );
};

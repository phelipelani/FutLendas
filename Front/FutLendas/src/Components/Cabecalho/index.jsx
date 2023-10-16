import { CabecalhoExitStyled, CabecalhoLogoStyled, CabecalhoNavStyled, CabecalhoStyled } from "./styled";
import Logo from "../../Assets/Logo.png";
export const Cabecalho = () => {
  return (
    <CabecalhoStyled>
      <CabecalhoLogoStyled>
        <img src={Logo} alt="Logo Fut Lendas" />
      </CabecalhoLogoStyled>
      <CabecalhoNavStyled>
        <p>Perfil</p>
        <p>Futlendas</p>
        <p>Cartolendas</p>
      </CabecalhoNavStyled>
      <CabecalhoExitStyled>
        <p>Sair</p>
      </CabecalhoExitStyled>
    </CabecalhoStyled>
  );
};

import { FooterStyled } from "./styled";
import Ci from "../../Assets/Logo_Ci.png";
import LLDG from "../../Assets/Logo_LLDG.png";

export const FooterComponent = () => {
  return (
    <FooterStyled>
      <div className="footerContent">
        <div className="footerParceiras">
          <p>Empresas Parceiras</p>
          <div>
            <a href="https://www.cigamer.com.br" target="_blank">
              CI Informática
            </a>
            <img src={Ci} alt="Logo CI" />
          </div>
        </div>
        <div className="footerInfo">
          <p>&copy; 2023 Futlendas. Todos os direitos reservados.</p>
        </div>
        <div className="footerDesenvolvedores">
          <p>Desenvolvido por</p>
          <a href="https://www.lldg.com.br" target="_blank">
            LLDG
          </a>

          <img src={LLDG} alt="Logo CI" />
        </div>
      </div>
    </FooterStyled>
  );
};

import { Content, ContentHome, ContentLogo, Contentbtns } from "./styled";
import Logo from "../../../src/Assets/Comp.png";
import LogoFL from "../../../src/Assets/Logo_Bg.gif";
export const InicialPage = () => {
  return (
    <ContentHome>
      <Content>
        <Contentbtns>
          <img src={LogoFL}></img>
          <button className="bts" type="button">
            Entrar
          </button>
          <button className="bts" type="button">
            Cadastrar
          </button>
        </Contentbtns>
        <ContentLogo>
          <img src={Logo}></img>
        </ContentLogo>
      </Content>
    </ContentHome>
  );
};

import { Content, ContentHome, ContentLogo, Contentbtns } from "./styled";
import Logo from "../../../src/Assets/Comp.png";
import LogoFL from "../../../src/Assets/Logo_Bg.gif";
import TextField from "@mui/material/TextField";
import { FormLogin } from "../../Components/Forms/Login";
export const InicialPage = () => {
  return (
    <ContentHome>
      <Content>
        <Contentbtns>
          <img src={LogoFL}></img>
          <FormLogin />
          <h5>Ainda não possui conta?</h5>
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

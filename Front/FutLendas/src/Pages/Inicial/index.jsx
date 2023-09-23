import { Content, ContentHome, ContentLogo, Contentbtns } from "./styled";
import Logo from "../../../src/Assets/Comp.png";
import LogoFL from "../../../src/Assets/Logo_Bg.gif";
import TextField from "@mui/material/TextField";
import { FormLogin } from "../../Components/Forms/Login";
import { useNavigate } from "react-router-dom";
import { FooterComponent } from "../../Components/Footer";
export const InicialPage = () => {
  const navigate = useNavigate();

  const sigin = () => {
    navigate("/register")
  };

  return (
    <ContentHome>
      <Content>
        <Contentbtns>
          <img src={LogoFL}></img>
          <FormLogin />
          <h5>Ainda não possui conta?</h5>
          <button onClick={sigin} className="bts" type="button">
            Cadastrar
          </button>
        </Contentbtns>
        <ContentLogo>
          <img src={Logo}></img>
        </ContentLogo>
      </Content>
      <FooterComponent/>
    </ContentHome>
  );
};

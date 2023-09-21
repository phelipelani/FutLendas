import { FormRegister } from "../../Components/Forms/Register";
import { DivImgContainer, MainContainer } from "./styled";

export const RegisterPage = () => {
  return (
    <MainContainer>
      <img src="../../../src/Assets/Logo.png" alt="Logo" />
      <DivImgContainer>
        <h1>Registro</h1>
        <FormRegister/>
      </DivImgContainer>
    </MainContainer>
  );
};

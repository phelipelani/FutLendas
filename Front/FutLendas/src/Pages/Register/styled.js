import styled from "styled-components";
import { tema } from "../../GlobalStyleds";

export const MainContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    50deg,
    ${tema.corSecundaria} 50%,
    ${tema.corPrimaria} 50%
  );
`;
export const DivImgContainer = styled.div`
  position: absolute;

  top: 20;
  left: 50;
  width: 35%;
  height: 70%;
  background-image: url("../../../src/Assets/Logo.png");
  background-size: cover;
  box-shadow: 0px 0px 2px 2px;
  border-radius: 1rem;

  aside {
    width: 100%;
    height: 100%;
    background: ${tema.corPrimaria};
    opacity: 0.9;
    padding: 0;
    margin: 0;

    h1 {
      color:pink;
      opacity: 1;
    }
  }
`;

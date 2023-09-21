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
    ${tema.corSecundariaDesfoque} 50%,
    ${tema.corPrimariaDesfoque} 50%
  );
  img {
    
    position: absolute;
    object-fit: cover;
    width: 27%;
    height: 60%;
  }
`;
export const DivImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 30%;
  height: 80%;
  // box-shadow: 0px 0px 2px 2px;
  border-radius: 1rem;
  background: linear-gradient(
    50deg,
    ${tema.corSecundaria} 50%,
    ${tema.corPrimaria} 50%
  );
  h1{
    color: ${tema.text};
    font-size: 3rem;
    
  }

  }
`;

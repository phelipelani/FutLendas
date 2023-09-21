import styled from "styled-components";
import { tema } from "../../GlobalStyleds";

export const ContentHome = styled.div`
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

export const Content = styled.div`
  width: 80%;
  height: 80%;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
export const ContentLogo = styled.div`
  padding: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  img {
    width: 80%;
    height: auto;
    object-fit: cover;
  }
`;
export const Contentbtns = styled.div`
  gap: 5px;
  width: 50%;
  height: 86%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;

  img {
    width: 30%;
    object-fit: none;
    height: auto;
  }
  h5 {
    margin: 0;
  }
`;

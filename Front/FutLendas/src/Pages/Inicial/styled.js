import styled from "styled-components";
import { tema } from "../../GlobalStyleds";


export const ContentHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(50deg, ${tema.corSecundaria} 50%, ${tema.corPrimaria} 50%);
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
  padding: 1rem;
  display: flex;
`;
export const ContentLogo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 55%;
  height: 100%;
  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Contentbtns = styled.div`
  gap: 10px;
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";
import { tema } from "../../GlobalStyleds";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  background: linear-gradient(10deg, ${tema.bk} 20%, ${tema.corPrimaria} 80%);
  width: 100vw;
  height: 100vh;
  align-items: center;
  color: ${tema.text};
  font-family: "monospace";
`;
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  border: 1px solid ${tema.text};
`;

export const CabecalhoStyled = styled.div`
  display: flex;
  width: 90%;
  height: 15%;
  margin: 1rem;
  font-size: 1.5rem;
`;

export const CabecalhoLogoStyled = styled.div`
  width: 25%;
  height: 100%;
  align-items: center;
  img {
    object-fit: contain;
    width: 50%;
    height: 100%;
  }
`;
export const CabecalhoNavStyled = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-evenly;

  p:hover {
    color: ${tema.textHover};
    cursor: pointer;
  }
`;
export const CabecalhoExitStyled = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  justify-content: center;
  p:hover {
    color: ${tema.textHover};
    cursor: pointer;
  }
`;

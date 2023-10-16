import styled from "styled-components";
import { tema } from "../../GlobalStyleds";

export const CabecalhoStyled = styled.div`
  display: flex;
  width: 90%;
  height: 15%;
  margin: 1rem;
  font-size: 4vw;
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
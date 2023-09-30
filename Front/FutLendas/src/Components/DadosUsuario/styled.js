import styled from "styled-components";
import { tema } from "../../GlobalStyleds";



export const ContainerPerfilUser = styled.div`
  box-sizing: border-box;
  width: 45%;
  height: 150px;
  background-color: ${tema.corPrimariaDesfoque};
  border-radius: 10px;
  display: flex;
  padding: 0 0 0 1rem;
  align-items: center;
  box-shadow: 0px 1px 2px 1px ${tema.corPrimaria};
`;

export const ContainerPerfilInfosName = styled.div`
  width: 100%;
  height: 10%;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  h2 {
    font-size: 1rem;
    margin: 0;
  }
`;
export const ContainerSessaoInfos = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
`;

export const ContainerPerfilInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

export const ContainerPerfilInfosDados = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
  }
`;


import styled from "styled-components";
import logo from "../../Assets/carta.png"

export const ContainerPerfilFoto = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
`;

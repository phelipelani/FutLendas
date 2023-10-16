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




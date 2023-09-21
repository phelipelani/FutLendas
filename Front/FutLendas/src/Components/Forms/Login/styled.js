import styled from "styled-components";
import { tema } from "../../../GlobalStyleds";

export const FormStyle = styled.form`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 50%;
height: 45%;
transitions:0.3s;

.btnLogin{
  margin-top:0.5rem;
  transition: 0.3s;
  background: ${tema.corPrimaria};
  border: transparent;
}
.btnLogin:hover{
  transition: 0.3s;
  background: ${tema.botao};
  border: transparent;

}
}
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

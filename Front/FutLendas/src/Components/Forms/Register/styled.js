import styled from "styled-components";
import { tema } from "../../../GlobalStyleds";

export const FormRegisterStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;

`;

export const DivImputsStyle = styled.div`
width:80%;
margin 1rem 0;
`

export const DivBtsRegisterStyle = styled.div`
display: flex;
flex-direction: column;
width: 80%;
align-items: center;
justify-content: space-evenly;
height: 20%;
}

`

export const ButtonLoginStyle = styled.button`
color:${tema.corPrimaria};
background: transparent;
border: none;
text-decoration: underline;
cursor: pointer;
font-size:1rem;
font-style: oblique;


}
`


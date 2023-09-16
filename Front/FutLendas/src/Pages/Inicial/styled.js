import styled from "styled-components";
import Logo from "../../../public/Imagens/bg.jpg";

export const ContentHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

`;

export const Content = styled.div`
width: 80%;
height: 80%;
display: flex;
background: #fefefe;
border-radius: 1rem;


`
export const ContentLogo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 50%;
  height: 100%;
  background-image:url(${Logo});
  background-color: #333;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  img {
    width: 80%;
    height: 60%;
    object-fit: cover;
  }
`;
export const Contentbtns = styled.div`
  gap: 10px;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

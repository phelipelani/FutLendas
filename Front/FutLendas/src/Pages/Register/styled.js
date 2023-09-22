import styled from "styled-components";
import { tema } from "../../GlobalStyleds";

export const MainContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(50deg, ${tema.corSecundaria} 50%, ${tema.corPrimaria} 50%);
  img {
    position: absolute;
    object-fit: contain;
    width: 40%;
    height: 80%;
  }
`;
export const DivImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  position: relative;
  box-sizing: border-box;
  width: 35%;
  height: 90%;
  // box-shadow: 0px 0px 2px 2px;
  border-radius: 1rem;
  background:rgba(250, 250, 250, 0.9);
  
  
  h1{
    margin: 0;
    padding:5px;
    color: ${tema.preto};
    font-size: 3rem;
    
  }

  }
`;

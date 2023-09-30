import styled from "styled-components";
import { tema } from "../../GlobalStyleds";

export const FooterStyled = styled.footer`
  background-color: transparent;
  color: ${tema.corPrimaria}; 
  padding: 1rem 0; /* Espaçamento interno no footer */
  text-align: center;
  width: 100%;
  height: 10%;
  align-items: center;
  display: flex;
  justify-content: center;

  .footerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  .footerParceiras {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    div {
      display: flex;
      width: 100%;
      gap: 1rem;
      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: ${tema.corPrimaria}; 
      }
    }
  }
  .footerInfo {
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .footerDesenvolvedores {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1rem;
      color: ${tema.corSecundaria}; 
    }
    a {
      font-size: 1rem;
      text-decoration: none;
      color: #fff;
    }

    img {
      width: 50px;
    }
  }
`;

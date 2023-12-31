import { createGlobalStyle } from "styled-components";

export const tema = {
  corPrimaria: "rgba(37, 87, 135, 1)",
  corSecundaria: "#fdfdfd",
  botao: "#069ECB",
  bk: "#3DF2A8",
  textHover: "#FFE600",
  text: "#fffaf0",
  corPrimariaDesfoque: "rgba(0, 46, 138, 0.1)",
  preto: "rgba(0, 0, 0, 1)",
  error: "#ff0000",
};

export const GlobalStyle = createGlobalStyle`
body, html {
    font-family: 'monospace';
    height: 100%;
    margin: 0;
    overflow: hidden;
    box-sizing:border-box;
    padding: 0;

    .bts{
        width: 10vw;
        height: 5vh;
        background-color: ${tema.botao};
        border: 1.2182px solid ${tema.botao};
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.5vw;
        color: #ffffff;   
    }
    .bts:hover{
        background-color:${tema.corPrimaria}
    }
}
`;

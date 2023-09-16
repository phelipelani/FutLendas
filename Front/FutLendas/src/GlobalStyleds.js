import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, html {
    font-family: 'monospace';
    height: 100%;
    margin: 0;
    overflow: hidden;
    box-sizing:border-box;
    padding: 0;

    .login{
        width: 10vw;
        height: 5vh;
        background-color: #ff577f;
        border: 1.2182px solid #ff577f;
        border-radius: 4px;
        cursor: pointer;

        font-size: 1.5vw;
        color: #ffffff;
        
 

    }
}
`;

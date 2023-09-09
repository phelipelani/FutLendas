import { styled } from "styled-components";

export const MaquinaEscreverStyle = styled.p`
    font-size: 24px;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid #333; /* Efeito de cursor intermitente */
    padding-right: 8px;
    animation: blink-caret 0.75s step-end infinite;
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparente;
    }
    50% {
      border-color: #333;
    }
  }
  `;

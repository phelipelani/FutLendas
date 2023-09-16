import { styled } from "styled-components";

export const MaquinaEscreverStyle = styled.p`

    width: 80%;
    font-size: 1.5vw;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    padding: 24px;
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

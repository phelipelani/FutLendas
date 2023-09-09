import { useEffect, useState } from "react";
import { MaquinaEscreverStyle } from "./styled";

export const MaquinaEscrever = (props) => {
  const [text, setText] = useState("");

  const maquinaEscrever = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => maquinaEscrever(text, i + 1), 100);
    }
  };

  useEffect(() => {
    setTimeout(() => maquinaEscrever(props.text));
  }, []);

  return (
    <MaquinaEscreverStyle className="maquina-escrever">
      {text}
    </MaquinaEscreverStyle>
  );
};

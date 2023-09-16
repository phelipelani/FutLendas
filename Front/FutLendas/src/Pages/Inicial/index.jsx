import { useEffect, useState } from "react";
import { Content, ContentHome, ContentLogo, Contentbtns } from "./styled";
import { MaquinaEscrever } from "../../Components/MaquinaEscrever";

export const InicialPage = () => {
  const text = "Onde as Lendas Jogam, e marcam Histórias";
  return (
    <ContentHome>
      <Content>
        <ContentLogo>

          <MaquinaEscrever text={text} />
        </ContentLogo>
        <Contentbtns>
          <button className="login" type="button">Entrar</button>
          <button className="sign" type="button">Cadastrar</button>
        </Contentbtns>
      </Content>
    </ContentHome>
  );
};

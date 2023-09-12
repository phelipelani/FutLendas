import { useEffect, useState } from "react";
import Logo from "../../Assets/Logo.png";
import {
  ContentHome,
  ContentLogo,
  Contentbtns,
  VideoContainer,
} from "./styled";
import { MaquinaEscrever } from "../../Components/MaquinaEscrever";

export const InicialPage = () => {
  const text = "Onde as Lendas Jogam, e marcam Histórias";
  return (
    <VideoContainer>
      <video autoPlay loop muted source src="../../../public/videos/home.mp4"></video>
      <ContentHome>
        <ContentLogo>

          <MaquinaEscrever text={text} />
        </ContentLogo>
        <Contentbtns>
          <button type="button">Entrar</button>
          <button type="button">Cadastrar</button>
        </Contentbtns>
      </ContentHome>
    </VideoContainer>
  );
};

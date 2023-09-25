import {
    ContainerPerfilFoto,
  ContainerPerfilInfos,
  ContainerPerfilInfosDados,
  ContainerPerfilInfosName,
  ContainerPerfilUser,
  ContainerSessaoInfos,
} from "./styled";
import Carta from "../../Assets/carta.png";

export const BannerUsuario = () => {
  return (
    <ContainerPerfilUser>
      <ContainerPerfilInfosName>
        <h2>Nome : Phelipe Lani</h2>
      </ContainerPerfilInfosName>
      <ContainerSessaoInfos>
        <ContainerPerfilInfos>
          <ContainerPerfilInfosDados>
            <div>
              <p>Posição : Atacante</p>
              <p>Pontos : 30 </p>
              <p>Jogos na Carreira : 5</p>
              <p>Gols na Carreira : 7</p>
            </div>
            <div>
              <p>Assistencia na Carreira : 3</p>
              <p>Vitorias na Carreira : 2</p>
              <p>Derrotas na Carreira : 1</p>
              <p>Empates na Carreira : 2</p>
            </div>
          </ContainerPerfilInfosDados>
        </ContainerPerfilInfos>

        <ContainerPerfilFoto>
            <img src={Carta} alt="Escudo" />
        </ContainerPerfilFoto>
      </ContainerSessaoInfos>
    </ContainerPerfilUser>
  );
};

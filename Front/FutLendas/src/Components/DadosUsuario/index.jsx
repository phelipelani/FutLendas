import {
  ContainerPerfilInfos,
  ContainerPerfilInfosDados,
  ContainerPerfilInfosName,
  ContainerPerfilUser,
  ContainerSessaoInfos,
} from "./styled";

import PhotoDragAndDrop from "../DragInDrop/Perfil";



export const BannerUsuario = () => {
  return (
    <ContainerPerfilUser>
      <ContainerSessaoInfos>
        <ContainerPerfilInfosName>
          <h2>Nome : Phelipe Lani</h2>
        </ContainerPerfilInfosName>
        <ContainerPerfilInfos>
          <ContainerPerfilInfosDados>
            <div>
              <p>Posição : Atacante</p>
              <p>Pontos : 30 </p>
            </div>
          </ContainerPerfilInfosDados>
        </ContainerPerfilInfos>
      </ContainerSessaoInfos>
      <PhotoDragAndDrop />
    </ContainerPerfilUser>
  );
};

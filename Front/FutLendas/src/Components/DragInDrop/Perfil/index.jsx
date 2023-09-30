import foto from "../../../Assets/test.jpg";
import Carta from "../../Assets/carta.png";
export const DropZonePerfil = () => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const dropZone = e.target;
    dropZone.appendChild(draggedElement);
  };

  return (
    <ContainerPerfilFoto
      className="drop-zone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={foto} alt="Foto usuario" />
    </ContainerPerfilFoto>
  );
};

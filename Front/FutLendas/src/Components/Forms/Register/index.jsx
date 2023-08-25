import { useState } from "react";

export const FormRegister = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar a foto para o servidor, se necessário.
  };
  <form>
    <div>
      <label htmlFor="nome">Nome</label>
      <imput placeholder="Digite seu Nome aqui"></imput>
    </div>
    <div>
      <label htmlFor="email">E-mail</label>
      <imput placeholder="Digite seu email aqui"></imput>
    </div>
    <div>
      <label htmlFor="senha">Senha</label>
      <imput placeholder="Digite sua senha aqui"></imput>
    </div>
    <div>
      <label htmlFor="senha">Avatar</label>
      <input type="file" onChange={handleFileChange} accept="image/*" />
    </div>
    <div>
      <label htmlFor="senha">Posição</label>
      <imput placeholder="Em que posição você joga"></imput>
    </div>
  </form>;
};

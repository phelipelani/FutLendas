import { useContext } from "react";
import { AuthenticUserContext } from "../../../Providers/Users/AuthentUserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LogSchema } from "./LoginSchema";
import { TextField } from "@mui/material";
import { FormStyle } from "./styled";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const { UserLogin, setLod, lod } = useContext(AuthenticUserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LogSchema),
  });
  function submit(data) {
    UserLogin(data, setLod);
  }
  const navigate = useNavigate();
  const login = () => {
    navigate("/perfil")
  };

  return (
    <FormStyle onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <div id="usuario">
        <TextField
          disabled={lod}
          label="usuario"
          placeholder="Digite seu usuario aqui"
          variant="standard"
          {...register("usuario")}
        />
        {errors.usuario && <h6>{errors.usuario.message}</h6>}
      </div>
      <div id="senha">
        <TextField
          label="Senha"
          variant="standard"
          type="password"
          disabled={lod}
          {...register("senha")}
          placeholder="Digite sua senha aqui"
        />
        {errors.senha && <h6>{errors.senha.message}</h6>}
      </div>
      <button click={login} className="bts btnLogin" type="submit" disabled={lod}>
        {" "}
        {lod ? "Entrando ..." : "Entrar"}{" "}
      </button>
    </FormStyle>
  );
};

import { useContext } from "react";
import { AuthenticUserContext } from "../../../Providers/Users/AuthentUserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LogSchema } from "./LoginSchema";
import { TextField } from "@mui/material";

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

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <div id="usuario">
        <TextField
          disabled={lod}
          label="usuario"
          placeholder="Digite seu usuario aqui"
          variant="standard"
          {...register("usuario")}
        />
        {errors.usuario && <h5>{errors.usuario.message}</h5>}
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
        {errors.senha && <h5>{errors.senha.message}</h5>}
      </div>
      <button className="bts" type="submit" disabled={lod}>
        {" "}
        {lod ? "Entrando ..." : "Entrar"}{" "}
      </button>
    </form>
  );
};

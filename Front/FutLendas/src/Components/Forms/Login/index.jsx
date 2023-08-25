import { useContext } from "react";
import { AuthenticUserContext } from "../../../Providers/Users/AuthentUserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LogSchema } from "./LoginSchema";

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
      <div id="email">
        <label htmlFor="email">E-mail</label>
        <imput
          disabled={lod}
          type="email"
          {...register("email")}
          placeholder="Digite seu email aqui"
        ></imput>
        {errors.email && <h5>{errors.email.message}</h5>}
      </div>
      <div id="password">
        <label htmlFor="senha">Senha</label>
        <imput
          type="password"
          disabled={lod}
          {...register("password")}
          placeholder="Digite sua senha aqui"
        ></imput>
        {errors.password && <h5>{errors.password.message}</h5>}
      </div>
      <button type="submit" disabled={lod}>
        {" "}
        {lod ? "Entrando ..." : "Entrar"}{" "}
      </button>
    </form>
  );
};

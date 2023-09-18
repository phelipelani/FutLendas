import * as yup from "yup";

export const LogSchema = yup.object().shape({
  usuario: yup.string().required("Usuario obrigatorio"),
  senha: yup.string().min(4).required("Senha obrigatorio!"),
});

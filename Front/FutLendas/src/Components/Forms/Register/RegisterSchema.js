import * as yup from "yup";
export const RegSchema = yup.object().shape({
  usuario: yup.string().required("O campo Nome e Obrigatório"),
  email: yup.string().required("O campo Email e Obrigatório"),
  senha: yup
    .string()
    .required("O campo Senha e Obrigatório")
    .min(4, "Senha deve ter no minimo 4 caracteres"),
  avatar: yup.string().required("O campo Avatar é Obrigatório"),
});

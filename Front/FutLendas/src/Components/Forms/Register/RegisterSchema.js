import * as yup from "yup";
export const RegSchema = yup.object().shape({
  name: yup.string().required("O campo Nome e Obrigatório"),
  email: yup.string().required("O campo Email e Obrigatório"),
  password: yup
    .string()
    .required("O campo Senha e Obrigatório")
    .min(6, "Senha deve ter no minimo 6 caracteres"),
    Avatar: yup
    .string()
    .required("O campo Email e Obrigatório")

  bio: yup.string().required("Fale sobre você, precisa ter vergonha não"),
  contact: yup.string().required("passa o zap ou o insta pra noois stalkear"),
});

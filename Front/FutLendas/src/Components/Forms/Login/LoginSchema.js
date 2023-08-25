import * as yup from "yup";

export const LogSchema = yup.object().shape({
  email: yup.string().required("Abutanhe Seu e-mail aki cabra"),
  password: yup.string().min(4).required("fia de uma candanga. Sem senha, Sem acesso!"),
});

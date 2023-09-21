import { TextField } from "@mui/material";
import { OptionRegister } from "../Posicao";
import { FormRegisterStyle } from "./styled";

export const FormRegister = () => {
  // const { lod, setLod, Userregister } = useContext(AuthenticUserContext);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(RegSchema) });

  // function submit(data) {
  //   Userregister(data, setLod);
  // }

  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // Aqui você pode adicionar o código para enviar a foto para o servidor, se necessário.
  // };
  return (
    <FormRegisterStyle>
      <div >
        <TextField
          label="Usuario"
          variant="standard"
          type="text"
          // disabled={lod}
          // {...register("usuario")}
          placeholder="Digite seu Usuario aqui"
        />
      </div>
      <div>
        <TextField
          label="E-mail"
          variant="standard"
          type="email"
          // disabled={lod}
          // {...register("email")}
          placeholder="Digite seu email aqui"
        />
      </div>
      <div>
        <TextField
          label="Senha"
          variant="standard"
          type="password"
          // disabled={lod}
          // {...register("senha")}
          placeholder="Digite sua senha aqui"
        />
      </div>
      <div>
        <TextField
          label="Avatar"
          variant="standard"
          type="file"
          // disabled={lod}
          // {...register("avatar")}
          placeholder="Escolha sua foto"
          // onChange={handleFileChange}
          // accept="image/*"
        />
      </div>

    </FormRegisterStyle>
  );
};

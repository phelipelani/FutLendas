import { TextField } from "@mui/material";
import { OptionRegister } from "../Posicao";
import { ButtonLoginStyle, DivBtsRegisterStyle, DivImputsStyle, FormRegisterStyle } from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const navigate = useNavigate();

  function click() {
    navigate("/");
  }
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
      <DivImputsStyle>
        <TextField
        fullWidth
          label="Usuario"
          variant="standard"
          type="text"
          // disabled={lod}
          // {...register("usuario")}
          placeholder="Digite seu Usuario aqui"
        />
      </DivImputsStyle>
      <DivImputsStyle>
        <TextField
        fullWidth
          label="E-mail"
          variant="standard"
          type="email"
          // disabled={lod}
          // {...register("email")}
          placeholder="Digite seu email aqui"
        />
      </DivImputsStyle>
      <DivImputsStyle>
        <TextField
          fullWidth
          label="Senha"
          variant="standard"
          type="password"
          // disabled={lod}
          // {...register("senha")}
          placeholder="Digite sua senha aqui"
        />
      </DivImputsStyle>
      <DivImputsStyle>
        <TextField
          fullWidth
          label="Avatar"
          variant="standard"
          type="file"
          // disabled={lod}
          // {...register("avatar")}
          placeholder="Escolha sua foto"
          // onChange={handleFileChange}
          // accept="image/*"
        />
      </DivImputsStyle>
      <DivBtsRegisterStyle>
        <button className="bts">Cadastrar</button>
        <span>
          Já possui conta? <ButtonLoginStyle onClick={click} >Logar</ButtonLoginStyle>
        </span>
      </DivBtsRegisterStyle>
    </FormRegisterStyle>
  );
};

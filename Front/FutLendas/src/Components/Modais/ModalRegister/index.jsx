import Logo from "../../Assets/Logo.png";
import FormLogin from "../Forms/Login";
import FormRegister from "../Forms/Register";

// eslint-disable-next-line react/prop-types
export const Modal = ({ titulo, Form }) => {
  return (
    <div className="areaModal">
      <div className="modal">
        <div className="headModal">
          <div>
            <img src={Logo} alt="Logo Fut Lendas" />
          </div>
          <div>
            <p>{titulo}</p>
          </div>
          <div>X</div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};
const logar = "Entrar";
const register = "Registrar";
export const ModalLogin = Modal({ logar, FormLogin });
export const ModalRegistar = Modal({ register, FormRegister });

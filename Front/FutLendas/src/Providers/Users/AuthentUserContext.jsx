import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api";

export const AuthenticUserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthenticUserProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [lod, setLod] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("Token-FutLendas");
      if (token) {
        try {
          const response = await Api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsuario(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }
    loadUser();
  }, []);

  async function UserLogin(formData, setLod) {
    try {
      setLod(true);

      const response = await Api.post("users", formData);

      setTimeout(navigate("/home"), 3000);

      toast.success("Login efetuado com sucesso!");

      const { token, user } = response.data;

      setUsuario(user);

      localStorage.setItem("Token-FutLendas", token);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.error(error);
    } finally {
      setLod(false);
    }
  }

  async function UserRegister(formData, setLod) {
    try {
      setLod(true);
      // eslint-disable-next-line no-unused-vars
      const response = await Api.post("/users", formData);
      toast.success("Usuario registrado com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLod(false);
    }
  }

  return (
    <AuthenticUserContext.Provider
      value={{
        UserLogin,
        UserRegister,
        usuario,
        setUsuario,
        loading,
        lod,
        setLod,
      }}
    >
      {children}
    </AuthenticUserContext.Provider>
  );
};

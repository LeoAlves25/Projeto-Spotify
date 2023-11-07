import { toast } from "react-toastify";
import Usuario from "../entities/Usuario";
import axios from "axios";

export default class UserServices {
  constructor() {
    this.url = "http://localhost:3000/user";
    this.url2 = "http://localhost:3002/user";
  }

  async getSingleUser(user) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var user;

    await fetch(`${this.url}?firstName=${user}`, requestOptions)
      .then((response) => response.json())
      .then((result) => (user = result))
      .catch((error) => console.log("error", error));

    return user;
  }

  async putUser(id, usuario) {
    try {
      const response = await axios.put(`${this.url}/${id}`, usuario);

      if (response.status === 200) {
        console.log("Recurso atualizado com sucesso:", response.data);
        toast.success("Atualização realizada com sucesso", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return true;
      } else {
        toast.error("Erro ao atualizar as informações", {
          theme: "colored",
          onOpen: () => {
            return false;
          },
        });
        return false;
      }
    } catch (erro) {
      toast.error("Erro ao atualizar as informações", {
        theme: "colored",
        onOpen: () => {
          return false;
        },
      });
    }
  }

  async postUser(usuario) {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };

    let postado = await fetch(this.url, requestOptions)
      .then((response) => response.json())
      .catch(() =>
        toast.error("Erro ao cadastrar usuário!", {
          theme: "colored",
          onOpen: () => {
            return false;
          },
        })
      );

    if (!postado) {
      return false;
    }

    toast.success("Usuário cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    return true;
  }

  async verificarEmail(email) {
    var verificado = await axios.get(`${this.url2}/email=${email}`);

    if (verificado.status === 500) return false;
    if (verificado.status === 404) return false;

    if (verificado.data) return false;

    return verificado;
  }

  async verificaUsuario(email, password) {
    var usuario = await axios
      .post(`${this.url2}/login`, {
        email: email,
        password: password,
      })
      .catch(() => {});

    if (!usuario) return false;

    if (usuario.status === 500) return false;
    if (usuario.status === 404) return false;

    return usuario.data;
  }
}

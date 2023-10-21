import { toast } from "react-toastify";
import Usuario from "../entities/Usuario";

export default class UserServices {
  constructor() {
    this.url = "http://localhost:3000/user";
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
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var verificado = await fetch(`${this.url}?email=${email}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          return false;
        }

        return true;
      });

    return verificado;
  }

  async verificaUsuario(email, password) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var usuario = await fetch(
      `${this.url}?email=${email}&password=${password}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          let usuarioLogado = new Usuario(
            result[0].firstName,
            result[0].lastName,
            result[0].email
          );

          return usuarioLogado;
        }

        return false;
      });

    return usuario;
  }
}

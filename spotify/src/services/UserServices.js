import { toast } from "react-toastify";
import Usuario from "../entities/Usuario";
import axios from 'axios';


export default class UserServices {
  constructor() {
    this.url = "http://localhost:3002/user";
  }

  async getSingleUser(user){
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    }

    var user;
  
    await fetch(`${this.url}/email=${user}`, requestOptions)
      .then((response) => response.json())
      .then((result) => (user = result))
      .catch((error) => console.log("error", error));

    return user;
  }

  
  async putUser(id, usuario){ 
    try{
      const response = await axios.put(`${this.url}/${id}`, usuario);
    
      if (response.status === 200) {
        console.log('Recurso atualizado com sucesso:', response.data);
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
         })
        return false;
      }
    }
    catch (erro){
        toast.error("Erro ao atualizar as informações", {
        theme: "colored",
        onOpen: () => {
          return false;
        },
       })
    }
  }

  async putUser1(usuario){
    console.log("-----------------------------")  
    console.log(usuario)
    console.log("-----------------------------")
    var requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };

    let postado = await fetch(`${this.url}`, requestOptions)
      .then((response) => response.json())
      .catch(() =>
        toast.error("Erro ao atualizar perfil!", {
          theme: "colored",
          onOpen: () => {
            return false;
          },
        })
      );

    if (!postado) {
      return false;
    }

    toast.success("Usuário atualizado com sucesso!", {
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

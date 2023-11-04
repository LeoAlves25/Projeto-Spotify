import "./Principal.css";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../componentes/Sidebar";
import Body from "../../componentes/BodyPrincipal";

const Principal = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuarioNome")));

  if (usuario === null) {
    toast.error("Você deve fazer um login antes!!!", {
      theme: "colored",
      onOpen: () => navigate("/login"),
    });
  }

  useEffect(() => {
    const saveUsuario = localStorage.getItem("usuarioNome");

    if (saveUsuario) {
      const usuarioParse = JSON.parse(saveUsuario);
      setUsuario(usuarioParse);
    }
  }, []);

  return (
    <div className="principal">
      <div className="principal__body">
        <Sidebar altura="100vh" />
        <Body altura="100vh" />
      </div>
    </div>
  );
};

export default Principal;

import "./Playlist.css";

import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Playlist = (props) => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("usuarioNome"))
  );

  if (usuario === null) {
    toast.error("Você deve fazer um login antes!!!", {
      theme: "colored",
      onOpen: () => navigate("/login"),
    });
  }

  useEffect(() => {
    const saveUsuario = localStorage.setItem(
      "usuarioNome",
      JSON.stringify(usuario)
    );

    if (saveUsuario) setUsuario(saveUsuario);
  }, [usuario]);

  return (
    <div className="playlist">
      <img className="playlist__img" src="/IMG/playlist.png"></img>
      <div className="playlist__container-info">
        <h3 className="playlist__name">
          {props.nome ? props.nome : "Minha playlist"}
        </h3>
        <p className="playlist__userName">{props.user ? props.user : "user"}</p>
      </div>
    </div>
  );
};

export default Playlist;

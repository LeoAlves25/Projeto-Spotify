import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Faq from "./pages/Faq/Faq";
import Principal from "./pages/principal/index";
import TelaProvisoria from "./pages/TelaProvisoria";

import Usuario from "./entities/Usuario";

export const UserContext = createContext();
export const UserLogadoContext = createContext();

function App() {
  var usuario = new Usuario("Adm", "Adm", "adm@email.com", "123");

  var [usuarioLogado, setUsuarioLogado] = useState({});

  var [usuarios, setUsuarios] = useState([usuario]);

  return (
    <>
      <div className="App">
        <UserLogadoContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
          <UserContext.Provider value={{ usuarios, setUsuarios }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="faq" element={<Faq />} />
              <Route path="principal" element={<Principal />} />
              <Route path="playlists/:id" element={<TelaProvisoria />} />
            </Routes>
            <ToastContainer />
          </UserContext.Provider>
        </UserLogadoContext.Provider>
      </div>
    </>
  );
}

export default App;

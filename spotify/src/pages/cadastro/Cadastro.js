import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Cadastro.css";
import Footer2 from "../../components/Footer2/";
import Nav from "../../components/Nav";

import img from "../../IMG/logo-spotify.png";

import Usuario from "../../entities/Usuario";

import UserServices from "../../services/UserServices";

export default function Cadastro() {
  const navigate = useNavigate();

  const userServices = new UserServices();

  const [inputFields, setInputFields] = useState({
    nomeUsuario: "",
    sobrenomeUsuario: "",
    emailUsuario: "",
    senhaUsuario: "",
    repetirSenhaUsuario: "",
    radioOption: "",
    checkTermos: "",
  });

  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputFields) => {
    let errors = {};
    if (!inputFields.nomeUsuario) {
      errors.nomeUsuario = "Nome é obrigatório";
    }
    if (!inputFields.sobrenomeUsuario) {
      errors.sobrenomeUsuario = "Sobrenome é obrigatório";
    }
    if (!inputFields.emailUsuario) {
      errors.emailUsuario = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(inputFields.emailUsuario)) {
      errors.emailUsuario = "Email é inválido";
    }
    if (!inputFields.senhaUsuario) {
      errors.senhaUsuario = "Senha é obrigatório";
    } else if (inputFields.senhaUsuario.length < 8) {
      errors.senhaUsuario = "Senha deve ter no mínimo 8 caracteres";
    }
    if (!inputFields.repetirSenhaUsuario) {
      errors.repetirSenhaUsuario = "Repita sua senha";
    } else if (inputFields.repetirSenhaUsuario !== inputFields.senhaUsuario) {
      errors.repetirSenhaUsuario = "Senhas não conferem";
    }

    if (!inputFields.radioOption) {
      errors.radioMasc = "Selecione uma opção";
    }

    if (!inputFields.checkTermos) {
      errors.checkTermos = "Você precisa concordar com os termos";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = async () => {
    var usuario = new Usuario(
      inputFields.nomeUsuario,
      inputFields.sobrenomeUsuario,
      inputFields.emailUsuario,
      inputFields.senhaUsuario
    );

    var verificacao = await userServices.verificarEmail(usuario.email);

    if (!verificacao) {
      toast.error("Email já cadastrado!", {
        theme: "colored",
      });
    } else {
      let postado = await userServices.postUser(usuario);

      if (postado) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors, submitting]);

  function showPasswordCharacters(inputId, iconId) {
    const togglePassword = document.querySelector("#" + iconId);
    const password = document.querySelector("#" + inputId);

    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    togglePassword.classList.toggle("bi-eye");
  }
  return (
    <>
      <div>
        <Nav />
      </div>

      <ToastContainer />

      <section className="p-5 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-bg-dark ">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">
                        Cadastrar Usuário
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row  mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="nomeUsuario">
                              Primeiro Nome
                            </label>
                            <input
                              type="text"
                              id="nomeUsuario"
                              name="nomeUsuario"
                              value={inputFields.nomeUsuario}
                              onChange={handleChange}
                              className="form-control"
                            />

                            {errors.nomeUsuario ? (
                              <div className="text-danger">
                                {errors.nomeUsuario}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row  mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="sobrenomeUsuario"
                            >
                              Sobrenome
                            </label>
                            <input
                              type="text"
                              id="sobrenomeUsuario"
                              name="sobrenomeUsuario"
                              value={inputFields.sobrenomeUsuario}
                              onChange={handleChange}
                              className="form-control"
                            />

                            {errors.sobrenomeUsuario ? (
                              <div className="text-danger">
                                {errors.sobrenomeUsuario}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="emailUsuario"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="emailUsuario"
                              name="emailUsuario"
                              value={inputFields.emailUsuario}
                              onChange={handleChange}
                              className="form-control"
                            />

                            {errors.emailUsuario ? (
                              <div className="text-danger">
                                {errors.emailUsuario}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="senhaUsuario"
                            >
                              Senha
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                id="senhaUsuario"
                                name="senhaUsuario"
                                value={inputFields.senhaUsuario}
                                onChange={handleChange}
                                className="form-control"
                              />
                              <i
                                className="bi bi-eye-slash input-group-text"
                                id="iconPassword"
                                onClick={() => {
                                  showPasswordCharacters(
                                    "senhaUsuario",
                                    "iconPassword"
                                  );
                                }}
                              ></i>
                            </div>
                            {errors.senhaUsuario ? (
                              <div className="text-danger">
                                {errors.senhaUsuario}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="repetirSenhaUsuario"
                            >
                              Repita sua Senha
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                id="repetirSenhaUsuario"
                                name="repetirSenhaUsuario"
                                value={inputFields.repetirSenhaUsuario}
                                onChange={handleChange}
                                className="form-control"
                              />
                              <i
                                className="bi bi-eye-slash input-group-text"
                                id="iconRepeatPassword"
                                onClick={() => {
                                  showPasswordCharacters(
                                    "repetirSenhaUsuario",
                                    "iconRepeatPassword"
                                  );
                                }}
                              ></i>
                            </div>
                            {errors.repetirSenhaUsuario ? (
                              <div className="text-danger">
                                {errors.repetirSenhaUsuario}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="row justify-content-center text-center">
                          <div className="form-check col-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioOption"
                              id="radioMasc"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="radioMasc"
                            >
                              Masculino
                            </label>
                          </div>
                          <div className="form-check col-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioOption"
                              id="radioFem"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="radioFem"
                            >
                              Feminino
                            </label>
                          </div>
                          <div className="form-check col-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioOption"
                              id="radioOutros"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="radioOutros"
                            >
                              Outros
                            </label>
                          </div>
                          {errors.radioMasc ? (
                            <div className="text-danger">
                              {errors.radioMasc}
                            </div>
                          ) : null}
                        </div>
                        <br />
                        <div>
                          <div className="form-check d-flex justify-content-center mb-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              name="checkTermos"
                              id="checkTermos"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkTermos"
                            >
                              Concordo com todos os{" "}
                              <a
                                href="../../IMG/meme-termos.png"
                                target="_blank"
                              >
                                Termos de Serviço
                              </a>
                            </label>
                          </div>
                          {errors.checkTermos ? (
                            <div className="text-danger">
                              {errors.checkTermos}
                            </div>
                          ) : null}
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <label className="">
                            Já possuo conta. Realizar{" "}
                            <Link to="/login">login</Link> .
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-1">
                          {/* <Link to="/login"> */}
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                          >
                            Registrar
                          </button>
                          {/* </Link> */}
                        </div>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center order-1 order-lg-2 mb-md-3 mb-sm-3">
                      <Link to="/">
                        <img src={img} className="img-fluid" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer2 />
      </div>
    </>
  );
}

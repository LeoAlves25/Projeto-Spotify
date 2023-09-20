import "./Cadastro.css";
import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer2/";
import Nav from "../../components/Nav";

import img from "../../IMG/logo-spotify.png";

export default function cadastro() {
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

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">
                              Nome de Usuário
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">
                              Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">
                              Senha
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                              />
                              <i
                                className="bi bi-eye-slash input-group-text"
                                id="iconPassword"
                                onClick={() => {
                                  showPasswordCharacters(
                                    "password",
                                    "iconPassword"
                                  );
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4cd">
                              Repita sua Senha
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                id="repeatpassword"
                                className="form-control"
                              />
                              <i
                                className="bi bi-eye-slash input-group-text"
                                id="iconRepeatPassword"
                                onClick={() => {
                                  showPasswordCharacters(
                                    "repeatpassword",
                                    "iconRepeatPassword"
                                  );
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-center text-center">
                          <div className="form-check col-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Masculino
                            </label>
                          </div>
                          <div className="form-check col-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Feminino
                            </label>
                          </div>
                          <div className="form-check col-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault3"
                            >
                              Outros
                            </label>
                          </div>
                        </div>
                        <br />
                        <div className="form-check d-flex justify-content-center mb-2">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            Concordo com todos os{" "}
                            <a href="../../IMG/meme-termos.png" target="_blank">
                              Termos de Serviço
                            </a>
                          </label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            Já possuo conta. Realizar{" "}
                            <Link to="/login">login</Link> .
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-1">
                          <Link to="/login">
                            <button
                              type="button"
                              className="btn btn-success btn-lg"
                            >
                              Registrar
                            </button>
                          </Link>
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

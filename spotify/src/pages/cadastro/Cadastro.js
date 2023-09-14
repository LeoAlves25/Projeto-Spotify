import "./Cadastro.css";
import { Link } from "react-router-dom";

import img from "../../IMG/logo-spotify.png";

// import img2 from '../IMG/logo-spotify.png';

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
    <section class="h-100 p-3">
      <div class="container">
        <div class="row d-flex justify-content-center ">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-bg-dark ">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">
                      Cadastrar Usuário
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            Nome de Usuário
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">
                            Senha
                          </label>
                          <div class="input-group">
                            <input
                              type="password"
                              id="password"
                              class="form-control"
                            />
                            <i
                              class="bi bi-eye-slash input-group-text"
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

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">
                            Repita sua Senha
                          </label>
                          <div class="input-group">
                            <input
                              type="password"
                              id="repeatpassword"
                              class="form-control"
                            />
                            <i
                              class="bi bi-eye-slash input-group-text"
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

                      <div class="row justify-content-center text-center">
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Masculino
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Feminino
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault3"
                          >
                            Outros
                          </label>
                        </div>
                      </div>
                      <br />
                      <div class="form-check d-flex justify-content-center mb-2">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label class="form-check-label" for="form2Example3">
                          Concordo com todos os{" "}
                          <a href="../../IMG/meme-termos.png" target="_blank">
                            Termos de Serviço
                          </a>
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-4">
                        <label class="form-check-label" for="form2Example3">
                          Já possuo conta. Realizar{" "}
                          <Link to="/login">login</Link> .
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-1 mb-lg-1">
                        <Link to="/login">
                          <button type="button" class="btn btn-success btn-lg">
                            Registrar
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>

                  <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center order-1 order-lg-2 mb-md-3 mb-sm-3">
                    <Link to="/">
                      <img src={img} class="img-fluid" alt="Sample image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./Login.css";

import img from "../../IMG/logo-spotify.png";
import { Link } from "react-router-dom";

export default function Login() {
  function showPasswordCharacters(inputId, iconId) {
    const togglePassword = document.querySelector(iconId);
    const password = document.querySelector(inputId);
  
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  
    togglePassword.classList.toggle("bi-eye");
  }

  return (
    <section class="h-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-bg-dark ">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">
                      Login
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
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
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
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
                              onClick={()=>{showPasswordCharacters("#password","#iconPassword")}}></i>
                          </div>
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <label class="form-check-label" for="form2Example3">
                          Não possuo conta. Realizar o{" "}
                          <Link to='/cadastro'>cadastro</Link>.
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-1 mb-lg-1">
                        <Link to='/principal'>
                          <button type="button" class="btn btn-success btn-lg">
                            Entrar
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>

                  <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center order-1 order-lg-2 mb-md-3 mb-sm-3">
                    <Link to="/">
                      <img src={img} class="img-fluid" alt="" />
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



import "./Login.css";
import img from "../../IMG/logo-spotify.png";
import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer2/";
import Nav from "../../components/Nav";

export default function Login() {
  function showPasswordCharacters(inputId, iconId) {
    const togglePassword = document.querySelector(iconId);
    const password = document.querySelector(inputId);

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

      <section className="h-100 p-5 d-flex align-items-center">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-bg-dark ">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">
                        Login
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
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
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
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
                                    "#password",
                                    "#iconPassword"
                                  );
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            Não possuo conta. Realizar o{" "}
                            <Link to="/cadastro">cadastro</Link>.
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-1">
                          <Link to="/principal">
                            <button
                              type="button"
                              className="btn btn-success btn-lg"
                            >
                              Entrar
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

      <Footer2 />
    </>
  );
}

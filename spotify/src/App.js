import './App.css';
import img1 from './IMG/spotify-logo-svg.svg';
import img2 from './IMG/spotify-logo.png';

function App() {
  return (
    
      <div class="principal bg-success" >
        <nav class="navbar navbar-expand-lg bg-black ">
          <div class="container-fluid">
              <a class="navbar-brand ps-3" href="#">
                  <img src={img1} alt="" width="100" height="30"
                      class="d-inline-block align-text-top"/>                    
                  spotfy
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end fw-bolder" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active text-success" aria-current="page" href="" >Inicio</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-success" href="../HTML/faq.html" >FAQ</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-success" href="../HTML/cadastro.html" >Registrar</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-success" href="../HTML/login.html" >Login</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <section class="container">
          <div class=" bg-success">
              <div class="row div-central"></div>
              <div class="row">
                  <div class="col-1"></div>
                  <div class="col-4">
                      <div class="container">
                          <h3 class="h1">Música para todos</h3>
                          <p class="text-bs-tertiary-color">Sem necessidade de cartão de crédito</p>
                          <a href="#" class="btn text-success bg-black fw-bolder">Registre de graça</a>
                      </div>

                  </div>
                  <div class="col-2"></div>
                  <div class="col-5">

                      <div class="text-center ">
                          <img src={img2} alt='' class="rounded w-25"/>
                          <p class="h3 pt-3"> Spotify </p>
                          <p class="text-secondary-emphasis">Música para todos.</p>
                          <p class="h4"> R$14.99 / mês</p>
                      </div>

                  </div>
              </div>

              <div class="container text-center pt-5 pb-2 ">
                  <p class="h5 pt-3">Primeiro mês de Premium de graça.</p>
                  <p class="text-secondary-emphasis">Escute milhões de musicas livres de anúncios, a qualquer momento.</p>

              </div>
          </div>
      </section>
      </div>
  );
}

export default App;

import "./Home.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer2 from "../../components/Footer2/";

import img2 from "../../IMG/spotify-logo.png";

export default function Home() {
  return (
    <>
      <div className="bg_gradiant">
        <Nav />
        <section className="container main_content">
          <div className="">
            <div className="row justify-content-around mg-1">
              <div className="col-4">
                <div className="container">
                  <h3 className="h1 text-success">Música para todos</h3>
                  <p className="text-bs-tertiary-color text-success">
                    Sem necessidade de cartão de crédito
                  </p>
                  <Link
                    to="/cadastro"
                    className="btn text-success bg-black fw-bolder text-success"
                  >
                    Registre de graça
                  </Link>
                </div>
              </div>
              <div className="col-5">
                <div className="text-center ">
                  <img src={img2} alt="" className="rounded w-25" />
                  <p className="h3 pt-2 text-success"> Spotify </p>
                  <p className=" p-1 text-success">Música para todos.</p>
                  <p className="h5 text-success"> R$14.99 / mês</p>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div className="container text-center  pt-5 pb-2 ">
                <p className="h5 pt-3 text-success">
                  Primeiro mês de Premium de graça.
                </p>
                <p className="text-success">
                  Escute milhões de musicas livres de anúncios, a qualquer
                  momento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer2 />
    </>
  );
}

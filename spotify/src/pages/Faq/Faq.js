import "./Faq.css";
import img from "../../IMG/SpotifyLogoWhite.png";
import Accordion from 'react-bootstrap/Accordion';
import data from "../../resources/FAQ.json"
import { Link } from "react-router-dom";

export default function Faq() {
    return (
        <>
            <header>
                <div class="container mt-5 px-4">
                    <div class="row justify-content-around">
                        <div class="col-lg-2">
                            <div href="../HTML/index.html">
                                <Link to="/">
                                    <img src={img} alt="Spotify Logo" width="160" height="50" />
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-2 mt-2">
                            <div>
                                <div class="row">
                                    <Link to="/login" class="text-black fw-bolder col-5 btn btn-light me-1">Login</Link>
                                    <Link to="/cadastro" class="text-black fw-bolder col-6 btn btn-light ms-2">Cadastro</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div class="row justify-content-center">
                    <div class="col-lg-10 mt-5 justify-content-center">
                        <label class="col-8">
                            <input type="text" class="form-control text-center" placeholder="Pesquisar Duvida" name="pesquisarDuvida" />
                        </label>
                    </div>

                </div>
                <section id="FAQ" class="py-5">
                    <h2 class=" text-center text-light">Frequently Asked Questions</h2>
                    <h3 class="mb-5 pb-5 text-center text-light">FAQ</h3>

                    <div class="container">
                        <div>
                            <Accordion>
                                {data.map((el, idx) => (
                                    <Accordion.Item eventKey={idx}>
                                        <Accordion.Header>{data[idx].Enuciado}</Accordion.Header>
                                        <Accordion.Body>
                                            {data[idx].Resposta}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>


                </section>
            </main>

            <footer class="bg-black footer">
                <div class="d-flex justify-content-center align-items-center">
                    <Link to="/">
                        <img src={img} alt="Spotify Logo" class="mx-auto" width="330" height="100" />
                    </Link>
                </div>
            </footer>
        </>
    );
}
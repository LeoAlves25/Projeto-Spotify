import './Home.css'
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer';

import img2 from '../../IMG/spotify-logo.png';
// import img2 from './IMG/spotify-logo.png';

export default function Home() {
    return (
        <div class="bg_gradiant">
            <Nav />
            
            <section class="container main_content">
                <div class="">
                    <div class="row justify-content-around mg-1">
                        <div class="col-4">
                            <div class="container">
                                <h3 class="h1 text-success">Música para todos</h3>
                                <p class="text-bs-tertiary-color text-success">Sem necessidade de cartão de crédito</p>
                                <Link to="/cadastro" class="btn text-success bg-black fw-bolder text-success">Registre de graça</Link>
                            </div>

                        </div>
                        <div class="col-5">

                            <div class="text-center ">
                                <img src={img2} alt='' class="rounded w-25" />
                                <p class="h3 pt-2 text-success"> Spotify </p>
                                <p class=" p-1 text-success">Música para todos.</p>
                                <p class="h5 text-success"> R$14.99 / mês</p>
                            </div>

                        </div>
                    </div>

                    <div className='row d-flex'>
                        <div class="container text-center  pt-5 pb-2 ">
                            <p class="h5 pt-3 text-success">Primeiro mês de Premium de graça.</p>
                            <p class="text-success">Escute milhões de musicas livres de anúncios, a qualquer momento.</p>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}
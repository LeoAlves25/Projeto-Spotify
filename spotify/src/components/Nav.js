import { Link } from "react-router-dom";
import img1 from '../IMG/spotify-logo-svg.svg';

export default function Nav(){
    return(
        <nav class="navbar navbar-expand-lg bg-black ">
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand ps-3">
                        <img src={img1} alt="" width="100" height="30"
                            class="d-inline-block align-text-top" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end fw-bolder" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active text-success">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/faq" class="nav-link text-success">FAQ</Link>
                            </li>
                            <li class="nav-item">
                                < Link to="/cadastro" class="nav-link text-success">Registrar</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link text-success">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
    
}

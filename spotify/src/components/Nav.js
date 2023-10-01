import { Link } from "react-router-dom";
import img1 from '../IMG/spotify-logo-svg.svg';

export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-black ">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand ps-3">
                        <img src={img1} alt="" width="100" height="30"
                            className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end fw-bolder" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-success">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faq" className="nav-link text-success">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                < Link to="/cadastro" className="nav-link text-success">Registrar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-success">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
    
}

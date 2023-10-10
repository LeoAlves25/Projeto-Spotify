
import { Link } from 'react-router-dom';
import './Footer2.css';

export default function Footer(props) {
    
    return (
          

            <footer className="footer" >
                
                <div className="col-md-4 d-flex align-items-center">
                 
                    <span className="mb-3 mb-md-0 text-success">© 2023 Spotify, Inc</span>
                </div>

                <ul className="nav col-md-4  justify-content-end list-unstyled d-flex">
                    <li className="ms-3 "><Link to="#" className="text-body-secondary" ><img src={'/IMG/icons8-facebook.svg'} className="bi" width="24" height="24" alt=''/></Link></li>
                    <li className="ms-3"><Link to="#" className="text-body-secondary" ><img src={'/IMG/icons8-insta.svg'} className="bi" width="24" height="24" alt=''/></Link></li>
                    <li className="ms-3 me-3">
                        <Link to="#" className="text-body-secondary" ><img src={'/IMG/icons8-twitter.svg'} className="bi" width="24" height="24" alt=''/></Link>
                    </li>
                    
                    
                </ul>
            </footer>
    )
}
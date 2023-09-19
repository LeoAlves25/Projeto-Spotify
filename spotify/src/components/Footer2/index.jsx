
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './Footer2.css';

export default function Footer(props) {

    const location = useLocation();
    
    return (
          

            <footer class="footer" style={{
                display: location.pathname==="/principal" ? 'none' : 'flex', 
                
            }} >
                
                <div class="col-md-4 d-flex align-items-center">
                 
                    <span class="mb-3 mb-md-0 text-success">© 2023 Spotify, Inc</span>
                </div>

                <ul class="nav col-md-4  justify-content-end list-unstyled d-flex">
                    <li class="ms-3 "><Link to="#" class="text-body-secondary" ><img src={'/IMG/icons8-facebook.svg'} class="bi" width="24" height="24" alt=''/></Link></li>
                    <li class="ms-3"><Link to="#" class="text-body-secondary" ><img src={'/IMG/icons8-insta.svg'} class="bi" width="24" height="24" alt=''/></Link></li>
                    <li class="ms-3 me-3">
                        <Link to="#" class="text-body-secondary" ><img src={'/IMG/icons8-twitter.svg'} class="bi" width="24" height="24" alt=''/></Link>
                    </li>
                    
                    
                </ul>
            </footer>
    )
}
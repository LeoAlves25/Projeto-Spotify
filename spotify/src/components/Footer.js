
import { Link } from 'react-router-dom';
import img1 from '../IMG/icons8-facebook.svg';
import img2 from '../IMG/icons8-insta.svg';
import img3 from '../IMG/icons8-twitter.svg';
export default function Footer() {
    return (
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 bg-black">
                <div class="col-md-4 d-flex align-items-center">
                    <Link to="#"  class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"></svg>
                    </Link>
                    <span class="mb-3 mb-md-0 text-success">© 2023 Spotify, Inc</span>
                </div>

                <ul class="nav col-md-4  justify-content-end list-unstyled d-flex">
                    <li class="ms-3 "><Link to="#" class="text-body-secondary" ><img src={img1} class="bi" width="24" height="24" alt=''/></Link></li>
                    <li class="ms-3"><Link to="#" class="text-body-secondary" ><img src={img2} class="bi" width="24" height="24" alt=''/></Link></li>
                    <li class="ms-3 me-3"><Link to="#" class="text-body-secondary" ><img src={img3} class="bi" width="24" height="24" alt=''/></Link></li>
                    
                    
                </ul>
            </footer>
    )
}
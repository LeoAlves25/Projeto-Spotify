import React from 'react'
import './HeaderPrincipal.css'
import { Link } from 'react-router-dom';
const HeaderPrincipal = () => {

    function logout(){
        localStorage.clear();
    }

    return (
        <nav className='topNavbar'>
            <div className='topNavbar__arrows'>
                <a><img src='../IMG/arrowLeft.svg'></img> </a>
                <a href='#'><img src='../IMG/arrowRight.svg'></img></a>
            </div>
            <div className='topNavbar__links'>
                
                <Link to='/FAQ'>FAQ</Link>
                <Link to='/' onClick={()=>{logout()}}>Sair</Link>
            </div>

        </nav>
        )
}

export default HeaderPrincipal
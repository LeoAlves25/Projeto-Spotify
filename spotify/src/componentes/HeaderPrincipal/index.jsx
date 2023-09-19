import React from 'react'
import './HeaderPrincipal.css'

const HeaderPrincipal = () => {
    return (
        <nav className='topNavbar'>
            <div className='topNavbar__arrows'>
                <a href='#'><img src='IMG/arrowLeft.svg'></img></a>
                <a href='#'><img src='IMG/arrowRight.svg'></img></a>
            </div>
            <div className='topNavbar__links'>
                <a href='#'>FAQ</a>
                <a href='#'>Sair</a>
            </div>

        </nav>
        )
}

export default HeaderPrincipal
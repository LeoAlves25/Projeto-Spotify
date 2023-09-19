import React from 'react'   
import './Sidebar.css'
import Playlist from '../Playlist/'
const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar__content">
                <nav className='sidebar__nav'>
                    <ul className='sidebar__nav-lista'>
                        <li>
                            <img src='IMG/home.svg'></img>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <img src='IMG/search.svg'></img>
                            <a href="#">Buscar</a>
                        </li>
                    </ul>
                </nav>
                <section className="sidebar__biblioteca">
                    <div className="biblioteca__info">
                        <div className="info__conteiner-title">
                            <img src='IMG/library.svg'></img>
                            <h2 className='biblioteca__title'>Sua Biblioteca</h2>
                        </div>
                        <button className='btn-criarPlaylist'><img src='IMG/createPlaylist.svg'></img></button>
                    </div>
                    <div className="biblioteca__content">
                        <Playlist  />
                        <Playlist  />
                        <Playlist  />
                        <Playlist  />

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Sidebar
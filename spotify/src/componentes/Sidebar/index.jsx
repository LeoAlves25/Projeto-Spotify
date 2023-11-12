import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import Playlist from '../Playlist/'
import { Link } from 'react-router-dom'
import PlaylistService from '../../services/PlaylistsServices'
import Principal from '../../pages/principal'
import api from '../../services/Api'

const Sidebar = (props) => {
    const playlistService = new PlaylistService();
    const [playlistsPrivadas, setPlaylistsPrivadas] = useState([]);

    const userEmail = JSON.parse(localStorage.getItem("usuarioEmail"));

    async function handleCreate() {
        playlistService.createPlaylist(userEmail).then(()=>{
            getUserPlaylist();
        })
    }

    async function getUserPlaylist() {
        const response = await playlistService.getPlaylistsByUser(userEmail);
        setPlaylistsPrivadas(response);
    }

    useEffect(() => {
        getUserPlaylist();
    }, []);

    return (
        <div className="sidebar" style={{ height: props.altura }}>
            <div className="sidebar__content">
                <nav className='sidebar__nav'>
                    <ul className='sidebar__nav-lista'>
                        <li>
                            <img src='../IMG/home.svg'></img>
                            <Link to={"/principal"}>Inicio</Link>
                        </li>
                        <li>
                            <img src='../IMG/search.svg'></img>
                            <a href="#">Buscar</a>
                        </li>
                    </ul>
                </nav>
                <section className="sidebar__biblioteca">
                    <div className="biblioteca__info">
                        <div className="info__conteiner-title">
                            <img src='../IMG/library.svg'></img>
                            <h2 className='biblioteca__title'>Sua Biblioteca</h2>
                        </div>
                        <button
                            className='btn-criarPlaylist'
                            onClick={handleCreate}
                        ><img src='../IMG/createPlaylist.svg' /></button>
                    </div>
                    <div className="biblioteca__content">
                        {playlistsPrivadas?.map((playlist) => {
                                return(
                                    <Playlist
                                        key={playlist.id}
                                        id={playlist.id}
                                        privacidade={playlist.public}
                                        img={playlist.capa}
                                        nome={playlist.nome_playlist}
                                        desc={playlist.descricao}
                                        user={playlist.criador.firstName}
                                    />
                                );
                                                       
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Sidebar
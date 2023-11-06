import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import Playlist from '../Playlist/'
import { Link } from 'react-router-dom'
import Principal from '../../pages/principal'
import api from '../../services/Api'

const Sidebar = (props) => {
    const [playlistsPrivadas, setPlaylistsPrivadas] = useState([]);
    const [user, setUser] = useState({});

    const userEmail = JSON.parse(localStorage.getItem("usuarioEmail"));

    async function handleCreate() {
        const response = await api.post("/playlists", {
            nome_playlist: "Sua Playlist",
            descricao: "Descrição da sua playlist",
            criador: user[0],
            capa: "/IMG/playlist.png",
            public: false,
            musicas: []
        });

        setPlaylistsPrivadas([...playlistsPrivadas, response.data]);
    }

    useEffect(() => {
        async function getUserPlaylist() {
            const response = await api.get(`/playlists?criador.email=${userEmail}`);
            setPlaylistsPrivadas(response.data);
        }

        async function getUserLoged() {
            const response = await api.get(`/user?email=${userEmail}`);
            setUser(response.data);
        }

        getUserLoged();
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
                        {playlistsPrivadas.map((playlist) => {
                            if(playlist.public === false) {
                                return(
                                    <Playlist
                                        key={playlist.id}
                                        id={playlist.id}
                                        privacidade={playlist.public}
                                        img={playlist.capa}
                                        nome={playlist.nome_playlist}
                                        desc={playlist.descricao}
                                        user={playlist.firstName}
                                    />
                                );
                            }                            
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Sidebar
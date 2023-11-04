import "./PlaylistEspecifica.css";
import HeaderPrincipal from "../HeaderPrincipal";
import PesquisarMusica from "../PesquisarMusica";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../../services/Api";


const PlaylistEspecifica = ({ onMusicaClick }, props) => {
  const [playlistClicada, setPlaylistClicada] = useState({});
  const [musicas, setMusicas] = useState([]);
  const user = JSON.parse(localStorage.getItem("usuarioEmail"));
  const navigate = useNavigate();
  const location = useLocation();

  function handleSaveMusica(musicaId) {
    onMusicaClick(musicaId);
  }

  async function handleDeletePlaylist() {
    const response = await api.delete(`/playlists/${location.state.id}`).then(() => {
      navigate("/principal");
    });
  }

  async function getPlaylistClicada() {
    try {
      const response = await api.get(`/playlists/${location.state.id}`);
      console.log('Resposta da API:', response.data);
      setPlaylistClicada(response.data);
    } catch (error) {
      console.error('Erro ao buscar os dados da playlist:', error);
    }
  }

  useEffect(() => {
    debugger
    console.log("CREU");
    getPlaylistClicada();
  }, []);

  console.log(playlistClicada);
  console.log(location.state.id);

  return (
    <div className="BodyPlaylistEspecifica">
      <div className="BodyPlaylistEspecifica-content">
        <div className="playlist-top">
          <HeaderPrincipal />
        </div>
        <div className="playlist-content">
          <div className="playlist-imagem">
            <img src={playlistClicada.capa} />
          </div>
          <div className="playlist-info">
            <div className="playlist-privacidade">
              {playlistClicada.public}
            </div>
            <div className="playlist-titulo">{playlistClicada.nome_playlist}</div>
            <div className="playlist-descricao">{playlistClicada.descricao}</div>
            <div className="playlist-stats">
              <span>{playlistClicada.criador.firstName} • </span>
              <span>{playlistClicada.musicas.length} músicas</span>
            </div>
          </div>
          <button
            className="delete-playlist-btn"
            onClick={handleDeletePlaylist}
          />
        </div>
        <div className="playlist-musicas-container">
          <div className="playlist-musicas">
            <table>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Artista</th>
                <th>Duração</th>
              </tr>

              {musicas.map((musica) => {
                return (
                  <tr
                    onClick={() => handleSaveMusica(musica.nome_arquivo_audio)}
                  >
                    <td className="id-musica">{musica.id}</td>
                    <td className="botao-musica">
                      <button>A</button>
                    </td>
                    <td className="titulo-musica">
                      <div className="imagem-musica">
                        <img src={playlistClicada.capa} />
                      </div>
                      <div className="nome-musica">{musica.titulo}</div>
                    </td>
                    <td className="artista-musica">{musica.artista}</td>
                    <td className="duracao-musica">{musica.duracao}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <PesquisarMusica />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEspecifica;

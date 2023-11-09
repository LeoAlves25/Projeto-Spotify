import "./PlaylistEspecifica.css";
import HeaderPrincipal from "../HeaderPrincipal";
import PesquisarMusica from "../PesquisarMusica";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../../services/Api";

import PlaylistsServices from "../../services/PlaylistsServices";

const PlaylistEspecifica = ({ onMusicaClick }, props) => {
  const [playlistClicada, setPlaylistClicada] = useState({});
  const [musicas, setMusicas] = useState([]);
  const user = JSON.parse(localStorage.getItem("usuarioEmail"));
  const navigate = useNavigate();
  const location = useLocation();

  const [playlist, setPlaylist] = useState({});
  const playlistService = new PlaylistsServices();

  useEffect(() => {
    
    getPlaylistClicada();

    
  }, [location]);

  function handleSaveMusica(musicaId) {
    onMusicaClick(musicaId);
  }

  async function handleDeletePlaylist() {
    const response = await api
      .delete(`/playlists/${location.state.id}`)
      .then(() => {
        navigate("/principal");
      });
  }

  async function getPlaylistClicada() {
    const response = await playlistService.getPlaylistById(location.state.id);
    console.log(response)
    if (response) {
      setPlaylistClicada(response);
      setMusicas(response.musicas);
    }else{
      console.log("Erro ao buscar a playlist: ", response.error);
    }
  }

  const handleDeleteMusic = (musicId) => {
    if (playlist && user === playlist.criador.email) {
      const updatedMusicas = musicas.filter((musica) => musica.id !== musicId);
      const updatedPlaylist = { ...playlist, musicas: updatedMusicas };

      playlistService
        .updatePlaylist(playlist.id, updatedPlaylist)
        .then((response) => {
          setMusicas(updatedMusicas);
        })
        .catch((error) => {
          console.log("Erro ao atualizar a playlist: ", error);
          console.log(playlist.id);
          console.log(updatedPlaylist);
        });
    } else {
      console.error(
        "Você não tem permissão para excluir músicas desta playlist."
      );
    }
  };

  return (
    <div className="BodyPlaylistEspecifica">
      <div className="BodyPlaylistEspecifica-content">
        <div className="playlist-top">
          <HeaderPrincipal />
        </div>
        <div className="playlist-content">
          <div className="playlist-imagem">
            <img src={playlistClicada?.capa} width={"250px"} height={"250px"}/>
          </div>
          <div className="playlist-info">
            <div className="playlist-privacidade">{playlistClicada?.public ? "Pública" : "Privada"}</div>
            <div className="playlist-titulo">
              {playlistClicada?.nome_playlist}
            </div>
            <div className="playlist-descricao">
              {playlistClicada?.descricao}
            </div>
            <div className="playlist-stats">
              <span>{playlistClicada.criador?.firstName} • </span>
              <span>{playlistClicada?.musicas?.length} músicas</span>
            </div>
          </div>
          <button
            className="delete-playlist-btn"
            onClick={handleDeletePlaylist}
          >
            Excluir
          </button>
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

              {musicas?.map((musica) => {
                return (
                  <tr>
                    <td className="id-musica">{musica.id}</td>
                    <td className="botao-musica">
                      <button>A</button>
                    </td>
                    <td className="titulo-musica">
                      <div className="imagem-musica">
                        <img src={playlistClicada?.capa} />
                      </div>
                      <div className="nome-musica">{musica.titulo}</div>
                    </td>
                    <td className="artista-musica">{musica.artista}</td>
                    <td className="duracao-musica">{musica.duracao}</td>
                    <td className="botoes">
                      <button
                        onClick={() =>
                          handleSaveMusica(musica.nome_arquivo_audio)
                        }
                      >
                        Play
                      </button>
                      <button onClick={() => handleDeleteMusic(musica.id)}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <PesquisarMusica
            playlist={playlist}
            musicas={musicas}
            setMusicas={setMusicas}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEspecifica;

import "./PlaylistEspecifica.css";
import HeaderPrincipal from "../HeaderPrincipal";
import PesquisarMusica from "../PesquisarMusica";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/Api";

import PlaylistsServices from "../../services/PlaylistsServices";

const PlaylistEspecifica = ({ onMusicaClick }, props) => {
  const playlistService = new PlaylistsServices();
  const location = useLocation();
  const navigate = useNavigate();

  const [playlistClicada, setPlaylistClicada] = useState({});
  const [musicas, setMusicas] = useState([]);
  const [playlist, setPlaylist] = useState({});

  const user = JSON.parse(localStorage.getItem("usuarioEmail"));
  const playlistID = location.state.id;

  function handleSaveMusica(musicaId) {
    onMusicaClick(musicaId);
  }

  async function handleDeletePlaylist() {
    if (playlistClicada.criador.email === user) {
      playlistService.deletePlaylist(playlistID).then(() => {
        navigate("/principal");
        toast.success("Playlist deletada com sucesso.", {
          theme: "colored",
        });
      });
    } else {
      toast.error("Apenas o criador pode deletar!", {
        theme: "colored",
      });
    }
  }

  async function getPlaylistClicada() {
    const response = await playlistService.getPlaylistById(playlistID);
    console.log(response);
    if (response) {
      setPlaylistClicada(response);
      setMusicas(response.musicas);
    } else {
      console.log("Erro ao buscar a playlist: ", response.error);
    }
  }

  const handleDeleteMusic = async (musicId) => {

    
    console.log("A---> "+playlistID, musicId);
    try {
      const response = await playlistService.deleteMusicPlaylist({
        id_playlist: playlistID,
        id_musica: musicId
      });
      console.log(response.data);
      console.log(musicas)
      if (response.data) {
        setMusicas((prevMusicas) => prevMusicas.filter((musica) => musica.id !== musicId));
      } else {
        console.log("aq")
        console.error("Erro ao excluir a música da playlist.");
      }
    } catch (error) {
      console.error("Erro ao excluir a música da playlist: ", error);
    }
  };
  

  useEffect(() => {
    getPlaylistClicada();
  }, [location]);

  return (
    <div className="BodyPlaylistEspecifica">
      <div className="BodyPlaylistEspecifica-content">
        <div className="playlist-top">
          <HeaderPrincipal />
        </div>
        <div className="playlist-content">
          <div className="playlist-imagem">
            <img src={playlistClicada?.capa} width={"250px"} height={"250px"} />
          </div>
          <div className="playlist-info">
            <div className="playlist-privacidade">
              {playlistClicada?.public ? "Pública" : "Privada"}
            </div>
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
                if (musica.titulo != null) {
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
                }
              })}
            </table>
          </div>
          <PesquisarMusica
            playlist={playlistID}
            musicas={musicas}
            setMusicas={setMusicas}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEspecifica;

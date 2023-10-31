import "./PlaylistEspecifica.css";
import HeaderPrincipal from "../HeaderPrincipal";
import PesquisarMusica from "../PesquisarMusica";
import playlists from "../../resources/playlists.json";
import { useLocation } from "react-router";
import PlaylistsServices from "../../services/PlaylistsServices";
import { useEffect, useState } from "react";

const PlaylistEspecifica = ({ onMusicaClick }) => {
  const location = useLocation();

  const [playlist, setPlaylist] = useState({});
  const [musicas, setMusicas] = useState([]);
  const playlistService = new PlaylistsServices();
  const user = JSON.parse(localStorage.getItem("usuarioEmail"));

  useEffect(() => {
    playlistService.getPlaylists().then((playlists) => {
        const playlistId = location.state.id+1;
        const selectedPlaylist = playlists.find(playlist => playlist.id === playlistId);

        if (selectedPlaylist) {
          setPlaylist(selectedPlaylist);
          setMusicas(selectedPlaylist.musicas);
        }
      })
      .catch((error) => {
        console.log("Erro ao buscar a playlist: ", error);
      });
  }, [location]);
    console.log(playlist)



  function handleSaveMusica(musicaId) {
    onMusicaClick(musicaId);
  }

  const handleDeleteMusic = (musicId) => {
    console.log(playlist.criador.email)
    console.log(user)
    console.log(playlist.criador.email===user)
    if (playlist && user === playlist.criador.email) {
      const updatedMusicas = musicas.filter((musica) => musica.id !== musicId);
      const updatedPlaylist = { ...playlist, musicas: updatedMusicas };
  
      playlistService.updatePlaylist(playlist.id, updatedPlaylist)
        .then((response) => {
          setMusicas(updatedMusicas);
        })
        .catch((error) => {
          console.log("Erro ao atualizar a playlist: ", error);
          console.log(playlist.id);
          console.log(updatedPlaylist);
        });
    } else {
      console.error("Você não tem permissão para excluir músicas desta playlist.");
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
            <img src={playlist.capa} />
          </div>
          <div className="playlist-info">
            <div className="playlist-privacidade">
              {location.state.privacidade}
            </div>
            <div className="playlist-titulo">{playlist.nome_playlist}</div>
            <div className="playlist-descricao">{playlist.descricao}</div>
            <div className="playlist-stats">
            <span>{playlist.criador ? `${playlist.criador.firstName} ${playlist.criador.lastName}` : "Nome do Criador não disponível"} •</span>
            </div>
          </div>
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
                   
                  >
                    <td className="id-musica">{musica.id}</td>
                    <td className="botao-musica">
                      <button>A</button>
                    </td>
                    <td className="titulo-musica">
                      <div className="imagem-musica">
                        <img src={playlist.capa} />
                      </div>
                      <div className="nome-musica">{musica.titulo}</div>
                    </td>

                    <td className="artista-musica">{musica.artista}</td>
                    <td className="duracao-musica">{musica.duracao}</td>
                    <td className="botoes">
                    <button onClick={() => handleSaveMusica(musica.nome_arquivo_audio)}>
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
          <PesquisarMusica playlist={playlist} musicas={musicas} setMusicas={setMusicas} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEspecifica;

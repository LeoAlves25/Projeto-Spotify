import "./PesquisarMusica.css";
import "../PlaylistEspecifica/PlaylistEspecifica.css";
import React, { useState, useEffect } from "react";
import MusicService from "../../services/MusicService";
import PlaylistService from "../../services/PlaylistsServices";

const PesquisarMusica = ({ playlist, musicas, setMusicas }) => {
  const musicServices = new MusicService();
  const PlaylistServices = new PlaylistService();
  const [music, setMusic] = useState([]);
  const [filter, setFilter] = useState('');
  const user = JSON.parse(localStorage.getItem("usuarioEmail"));

  const generateUniqueId = () => {
    return Math.floor( Math.random() * 100) + 1;
  };


  var musicFiltred = [];

  const getMusic = async () => {
    setMusic(await musicServices.getMusic());
  };

  useEffect(() => {
    getMusic();
  },[]);

  musicFiltred = music.filter((song) => {
    const searchValue = filter.toLowerCase();
    return (
      song.titulo.toLowerCase().includes(searchValue) ||
      song.artista.toLowerCase().includes(searchValue)
    );
  });
  const handleAddToPlaylist = (musica) => {
    console.log(user)
    console.log(playlist.criador.email)

    if (playlist && user === playlist.criador.email) {
      const novaMusica = {
        id: generateUniqueId(),
        titulo: musica.titulo,
        artista: musica.artista,
        duracao: musica.duracao,
        nome_arquivo_audio: musica.nome_arquivo_audio,
      };

      const updatedMusicas = [...musicas, novaMusica];
      setMusicas(updatedMusicas);

      PlaylistServices.updatePlaylist(playlist.id, { ...playlist, musicas: updatedMusicas }).catch((error) => {
          console.error("Erro ao atualizar a playlist: ", error);
        });
    } else {
      console.error("Nenhuma playlist selecionada ");
    }
  };


  return (
    <div>
      <hr />

      <h1>Pesquisar música</h1>

      <div className="BodyPesquisarMusica">
        <div className="BodyPesquisarMusica-content">
          <div className="playlist-musicas-container ">
            <div class="form-outline">
              <input
                type="search"
                id="pesquisarMusica"
                class="form-control"
                placeholder="Pesquisar música..."
                aria-label="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <div className="playlist-content ">
              <div className="playlist-musicas pesquisarMusica">
                <table>
                  <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Duração</th>
                  </tr>
                  {musicFiltred.map((musica) => {
                    return (
                      <tr className="linhaPesquisa">
                        <td className="id-musica">{musica.id}</td>
                        <td className="botao-musica">
                          <button>A</button>
                        </td>
                        <td className="titulo-musica">{musica.titulo}</td>

                        <td className="artista-musica">{musica.artista}</td>
                        <td className="duracao-musica">{musica.duracao}</td>
                        <td class="botoes">
                              <button onClick={() => handleAddToPlaylist(musica)}>Adicionar</button>
                        </td>
                        </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesquisarMusica;

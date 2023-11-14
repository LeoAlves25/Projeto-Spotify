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

  musicFiltred = music?.filter((song) => {
    const searchValue = filter.toLowerCase();
    return (
      song.titulo.toLowerCase().includes(searchValue) ||
      song.artista.toLowerCase().includes(searchValue)
    );
  });

  const handleAddToPlaylist = async (musica) => {
    console.log(user);
      const ids = {
        id_playlist: playlist,
        id_musica: musica.id,     
      };
  
      console.log(ids)
      try {
        const response = await PlaylistServices.createMusicPlaylist(playlist, musica.id);
        console.log(response.data); 
        console.log("aoe")
      } catch (error) {
        console.error("Erro ao criar a relação entre música e playlist: ", error);
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
                  {musicFiltred?.map((musica) => {
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

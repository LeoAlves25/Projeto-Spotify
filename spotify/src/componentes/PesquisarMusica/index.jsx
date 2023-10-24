import "./PesquisarMusica.css";
import "../PlaylistEspecifica/PlaylistEspecifica.css";
import React, { useState, useEffect } from "react";

import MusicService from "../../services/MusicService";

const PesquisarMusica = () => {
  const musicServices = new MusicService();

  const [music, setMusic] = useState([]);
  const [filter, setFilter] = useState('');

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

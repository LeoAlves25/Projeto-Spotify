import "./BodyPrincipal.css";
import HeaderPrincipal from "../HeaderPrincipal";
import PlaylistCard from "../PlaylistCard";
import api from "../../services/Api";
import PlaylistService from "../../services/PlaylistsServices";
import { React, useState, useEffect } from "react";

function BodyPrincipal(props) {
  const playlistService = new PlaylistService();
  const [playlistsPublica, setPlaylistsPublicas] = useState([]);
  const [playlistsPrivadas, setPlaylistsPrivadas] = useState([]);

  const userEmail = JSON.parse(localStorage.getItem("usuarioEmail"));

  useEffect(() => {
    async function getPublicPlaylists() {
      const response = await playlistService.getPublicPlaylists();
      setPlaylistsPublicas(response);
    }

    async function getUserPlaylist() {
      const response = await playlistService.getPrivatePlaylistsByUser(userEmail);
      setPlaylistsPrivadas(response);
    }

    getPublicPlaylists();
    getUserPlaylist();
  }, []);

  return (
    <div className="bodyPrincipal" style={{ height: props.altura }}>
      <div className="bodyPrincipal__content">
        <HeaderPrincipal />
        <div className="bodyprincipal__main">
          <section className="bodyprincipal__main-content">
            <h2>Playlists Publicas</h2>
            <div className="wrapperPlaylist">
              {playlistsPublica.map((playlist) => {
                return (
                  <PlaylistCard
                    key={playlist.id}
                    id={playlist.id}
                    privacidade={playlist.public}
                    img={playlist.capa}
                    nome={playlist.nome_playlist}
                    desc={playlist.descricao}
                  />
                );
              })}
            </div>
          </section>
          <section className="bodyprincipal__main-content">
            <h2>Playlists Privadas</h2>
            <div className="wrapperPlaylist">
              {playlistsPrivadas.map((playlist) => {
                if (playlist.public == false) {
                  return (
                    <PlaylistCard
                      key={playlist.id}
                      id={playlist.id}
                      privacidade={playlist.public}
                      img={playlist.capa}
                      nome={playlist.nome_playlist}
                      desc={playlist.descricao}
                    />
                  );
                }
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BodyPrincipal;

import axios from "axios";

export default class PlaylistService {

  constructor() {
    this.url = "http://localhost:3000/playlists";
    this.url2 = "http://localhost:3002/playlist"
  }

  async getPlaylists() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(this.url, requestOptions);
      const playlists = await response.json();
      return playlists;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  async getPlaylistById(id) {
    const playlist = await axios.get(`${this.url2}/${id}`).catch((error) => console.log("error", error));

    return playlist.data;
  }

  updatePlaylist(playlistId, updatedPlaylist) {
    return axios.put(
      `http://localhost:3000/playlists/${playlistId}`,
      updatedPlaylist
    );
  }

  async getPublicPlaylists() {
    const playlists = await axios.get(`${this.url2}/public`).catch((error) => console.log("error", error));

    return playlists.data;
  }

  async getPrivatePlaylistsByUser(email) {
    const playlists = await axios.get(`${this.url2}/private/${email}`).catch((error) => console.log("error", error));

    return playlists.data;
  }

  async getPlaylistsByUser(email) {
    const playlists = await axios.get(`${this.url2}/user/${email}`).catch((error) => console.log("error", error));

    return playlists.data;
  }

  async createPlaylist(email) {
    const response = await axios.post(`${this.url2}/create`, { email }).catch((error) => console.log("error ", error));
    return response;
  }

  async deletePlaylist(idPlaylist) {
    const response = await axios.delete(`${this.url2}/delete/${idPlaylist}`).catch((error) => console.log("error ", error));
    return response;
  }

  async createMusicPlaylist(id_playlist, id_musica) {
    console.log("createmusicplaylist--")
    const response = await axios.post(`${this.url2}/music/new`, {id_playlist, id_musica})
    .catch((error) => console.log("error ", error));


    return response;
  }


  async deleteMusicPlaylist({ id_playlist, id_musica }) {
    console.log("deletemusicplaylist--");
    
    const response = await axios.delete(`${this.url2}/music/delete`, { data: { id_playlist, id_musica } })
      .catch((error) => console.log("error ", error));
  
    return response;
  }
  
}
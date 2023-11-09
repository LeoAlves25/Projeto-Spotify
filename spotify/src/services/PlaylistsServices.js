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

  async getPlaylistById(id){
    var playlist = await axios.get(`${this.url2}/${id}`).catch((error) => console.log("error", error));

    return playlist.data;
  }

  updatePlaylist(playlistId, updatedPlaylist) {
    return axios.put(
      `http://localhost:3000/playlists/${playlistId}`,
      updatedPlaylist
    );
  }

  async getPublicPlaylists(){
    var playlists = await axios.get(`${this.url2}/public`).catch((error) => console.log("error", error));

    return playlists.data;
  }

  async getPrivatePlaylistsByUser(email){
    var playlists = await axios.get(`${this.url2}/private/${email}`).catch((error) => console.log("error", error));

    return playlists.data;
  }

  async getPlaylistsByUser(email){
    var playlists = await axios.get(`${this.url2}/user/${email}`).catch((error) => console.log("error", error));

    return playlists.data;
  }
}

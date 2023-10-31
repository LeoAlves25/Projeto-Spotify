import axios from "axios";

export default class PlaylistService {
    constructor() {
      this.url = "http://localhost:3000/playlists";
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

  updatePlaylist(playlistId, updatedPlaylist) {
    return axios.put(`http://localhost:3000/playlists/${playlistId}`, updatedPlaylist);
  }

  }
  
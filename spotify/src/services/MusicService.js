export default class MusicServices {
    constructor() {
      this.url = "http://localhost:3002/musics";
    }
  
    async getMusic() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      var musics;
  
      await fetch(this.url, requestOptions)
        .then((response) => response.json())
        .then((result) => (musics = result))
        .catch((error) => console.log("error", error));
  
      return musics;
    }
  }
  
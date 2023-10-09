
import React, { useState, useEffect } from 'react';
import './Player.css';

const Player = (props) => {
  const [musicaUrl, setMusicaUrl] = useState(props.musicaUrl); 

  useEffect(() => {
    setMusicaUrl(props.musicaUrl);
  }, [props.musicaUrl]);

  return (
    <div className="playerContent">
      <audio src={musicaUrl} className="player" controls autoPlay> 
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default Player;

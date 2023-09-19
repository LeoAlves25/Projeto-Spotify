import React from 'react'
import './Playlist.css'
const Playlist = (props) =>{
    return(
        <div className="playlist">
            <img className="playlist__img" src='/IMG/playlist.png'></img>
            <div className="playlist__container-info">
                <h3 className="playlist__name">{props.nome ? props.nome : "Minha playlist"}</h3>
                <p className="playlist__userName">{props.user ? props.user : "user"}</p>
        
            </div>
              </div>
    )
}

export default Playlist
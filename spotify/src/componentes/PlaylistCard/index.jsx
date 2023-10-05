import React from 'react';
import './PlaylistCard.css';

const PlaylistCard = (props) =>{
    return (
        <div className="playlistCard">

            {props.img ?(
                <img className='playlistCard__img'   src={props.img}></img>                        
            ): (<img className='playlistCard__img' src='IMG/Playlist.png'/>
            )}

                <h3 className='playlistCard__title'>{props.nome}</h3>
                <p className="playlistCard__descricao">{props.desc ? props.desc : "Sem descrição"}</p>

        </div>
    )
}

export default PlaylistCard;
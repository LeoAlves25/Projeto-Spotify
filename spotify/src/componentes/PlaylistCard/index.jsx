import React from 'react';
import './PlaylistCard.css';
import { Link } from 'react-router-dom';

const PlaylistCard = (props) => {
    return (

        <Link
            to={`/playlists/${props.id}`}
            state={{ id: props.id, privacidade: props.privacidade }}
        >
            <div className="playlistCard">

                {props.img ? (
                    <img className='playlistCard__img' src={props.img}></img>
                ) : (<img className='playlistCard__img' src='IMG/Playlist.png' />
                )}

                <h3 className='playlistCard__title'>{props.nome}</h3>
                <p className="playlistCard__descricao">{props.desc ? props.desc : "Sem descrição"}</p>

            </div>
        </Link>
    );
}

export default PlaylistCard;
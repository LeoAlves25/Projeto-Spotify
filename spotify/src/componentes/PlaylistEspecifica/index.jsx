import "./PlaylistEspecifica.css"
import HeaderPrincipal from '../HeaderPrincipal'
import playlists from '../../resources/playlists.json'
import { useLocation } from "react-router"

const PlaylistEspecifica = ({onMusicaClick} ) => {
    const location = useLocation();
    let playlist = playlists[location.state.id];
    let musicas = playlist.musicas.map((musica) => {
        return musica
    });
    let tamanhoPlaylist = playlist.musicas.length;

    function handleSaveMusica(musicaId) {
        onMusicaClick(musicaId);
    }


   
    return (
        <div className="BodyPlaylistEspecifica">
            <div className="BodyPlaylistEspecifica-content">
                <div className="playlist-top">
                    <HeaderPrincipal />
                </div>
                <div className="playlist-content">
                    <div className="playlist-imagem">
                        <img src={playlist.capa} />
                    </div>
                    <div className="playlist-info">
                        <div className="playlist-privacidade">
                            {location.state.privacidade}
                        </div>
                        <div className="playlist-titulo">
                            {playlist.nome_playlist}
                        </div>
                        <div className="playlist-descricao">
                            {playlist.descricao}
                        </div>
                        <div className="playlist-stats">
                            <span>{playlist.criador} • </span>
                            <span>{tamanhoPlaylist} músicas</span>
                        </div>
                    </div>
                </div>
                <div className="playlist-musicas-container">
                    <div className="playlist-musicas">
                        <table>
                            <tr>
                                <th>#</th>
                                <th>Título</th>
                                <th>Artista</th>
                                <th>Duração</th>
                            </tr>

                            {musicas.map((musica) => {
                                return (
                                    <tr onClick={() => handleSaveMusica(musica.nome_arquivo_audio)}>
                                        <td className="id-musica">
                                            {musica.id}
                                        </td>
                                        <td className="botao-musica">
                                            <button>A</button>
                                        </td>
                                        <td className="titulo-musica">
                                            <div className="imagem-musica">
                                                <img src="" />
                                            </div>
                                            <div className="nome-musica">
                                                {musica.titulo}
                                            </div>
                                        </td>
                                        
                                        <td className="artista-musica">
                                            {musica.artista}
                                        </td>
                                        <td className="duracao-musica">
                                            {musica.duracao}
                                        </td>
                                       


                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaylistEspecifica;

import "./TelaProvisoria.css"
import Sidebar from '../../componentes/Sidebar'
import Body from '../../componentes/BodyPrincipal'
import Player from "../../componentes/Player"
import playlists from '../../resources/playlists.json'
import { useLocation } from "react-router"
import HeaderPrincipal from "../../componentes/HeaderPrincipal"

const TelaProvisoria = () => {
    const location = useLocation();
    let musicas = playlists[location.state.id].musicas.map((musica) => {
        return musica})

    return (
        <div className="TelaProvisoria">
            <div className="telaProvisoria__body">
                <Sidebar altura='90vh' />

                <div className="componenteBodyProvisorio"> {/* como se fosse o componente body da tua tela */}
                    <div className="componenteBodyProvisorio-content">
                        <h2>{location.state.privacidade}</h2>
                        <h2>{"Playlist " + location.state.id}</h2>
                        
                        {musicas.map((musica) => {
                            return(
                                <div className="musica">
                                    <h3>{musica.titulo}</h3>
                                    <p>{musica.artista}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
           
            <div className="Player">
                <Player />
            </div>
        </div>
    )
}

export default TelaProvisoria


import "./TelaProvisoria.css"
import Sidebar from '../../componentes/Sidebar'
import Body from '../../componentes/BodyPrincipal'
import Player from "../../componentes/Player"
import PlaylistEspecifica from '../../componentes/PlaylistEspecifica'
import HeaderPrincipal from "../../componentes/HeaderPrincipal"
import { useState } from "react"

const TelaProvisoria = () => {
    const [musicaUrl, setMusicaUrl] = useState(""); 
    

    const handleMusicaClick = (novaMusicaUrl) => {
        console.log(`Música clicada: ${novaMusicaUrl}`);
        setMusicaUrl(novaMusicaUrl); 
    }

    

    return (
        <div className="TelaProvisoria">
            <div className="telaProvisoria__body">
                <Sidebar altura='90vh' />
                <PlaylistEspecifica altura='90vh' onMusicaClick={handleMusicaClick} />
            </div>

            <div className="Player">
                <Player musicaUrl={musicaUrl} />
            </div>
        </div>
    )
}

export default TelaProvisoria

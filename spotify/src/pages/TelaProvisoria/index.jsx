
import "./TelaProvisoria.css"
import Sidebar from '../../componentes/Sidebar'
import Body from '../../componentes/BodyPrincipal'
import Player from "../../componentes/Player"
import PlaylistEspecifica from '../../componentes/PlaylistEspecifica'
import HeaderPrincipal from "../../componentes/HeaderPrincipal"

const TelaProvisoria = () => {
    return (
        <div className="TelaProvisoria">
            <div className="telaProvisoria__body">
                <Sidebar altura='90vh' />
                <PlaylistEspecifica altura='90vh' />
            </div>

            <div className="Player">
                <Player />
            </div>
        </div>
    )
}

export default TelaProvisoria

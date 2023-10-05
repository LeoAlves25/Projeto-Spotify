
import "./Principal.css"
import Sidebar from '../../componentes/Sidebar'
import Body from '../../componentes/BodyPrincipal'
import Player from "../../componentes/Player"
const Principal = () => {
    return (
        <div className="principal">
            <div className="principal__body">
                <Sidebar />
                <Body />
            </div>
          
        </div>
    )
}

export default Principal

import './BodyPrincipal.css'
import HeaderPrincipal from '../HeaderPrincipal'
import PlaylistCard from '../PlaylistCard'
import  playlists  from '../../resources/playlists.json'

const bodyPrincipal = () => {

    return(
        <div className="bodyPrincipal">
            <div className="bodyPrincipal__content">
                <HeaderPrincipal />

                <div className="bodyprincipal__main">
                    <section className='bodyprincipal__main-content'>
                        <h2>Playlists Publicas</h2>
                        <div className="wrapperPlaylist">
                            {playlists.map((playlist) => {
                                return(
                                    <PlaylistCard img={playlist.capa} nome={playlist.nome_playlist} desc={playlist.descricao} />
                                )
                            })}

                        </div>
                    </section>
                    <section className='bodyprincipal__main-content'>
                        <h2>Playlists Pessoais</h2>
                        <div className="wrapperPlaylist">
                            {playlists.map((playlist) => {
                                return(
                                    <PlaylistCard img={playlist.capa} nome={playlist.nome_playlist} desc={playlist.criador}/>
                                )
                            })}

                        </div>
                    </section>
                </div>
                
            </div>
        </div>
    )

}

export default bodyPrincipal
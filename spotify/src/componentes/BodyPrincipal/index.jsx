import './bodyPrincipal.css'
import HeaderPrincipal from '../HeaderPrincipal/'
import PlaylistCard from '../PlaylistCard/'
import  playlists  from '../../resources/playlists.json'

const bodyPrincipal = () => {

    const playlistsData = playlists
    console.log(playlists[2].id)
    return(
        <div className="bodyPrincipal">
            <div className="bodyPrincipal__content">
                <HeaderPrincipal />

                <div className="bodyprincipal__main">
                    <section className='bodyprincipal__main-content'>
                        <h2>Playlists</h2>
                        <div className="wrapperPlaylist">
                            {playlists.map((playlist) => {
                                return(
                                    <PlaylistCard img={playlist.capa} nome={playlist.nome_playlist} />
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
import './bodyPrincipal.css'
import HeaderPrincipal from '../HeaderPrincipal/'
import PlaylistCard from '../PlaylistCard/'
const bodyPrincipal = () => {

    return(
        <div className="bodyPrincipal">
            <div className="bodyPrincipal__content">
                <HeaderPrincipal />

                <div className="bodyprincipal__main">
                    <section className='bodyprincipal__main-content'>
                        <h2>Playlists</h2>
                        <div className="wrapperPlaylist">
                            <PlaylistCard img="IMG/123Segundos.jpg" nome="123 Segundos"/>
                            <PlaylistCard img="IMG/ParaTodasAsPess.jpg" nome="Para todas as pessoas"/>
                            <PlaylistCard img="IMG/CafeDaManha.jpg" nome="Café Da Manha"/>

                            <PlaylistCard />
                    
                        </div>
                    </section>
                    <section className='bodyprincipal__main-content'>
                        <h2>Playlists</h2>
                        <div className="wrapperPlaylist">
                            <PlaylistCard img="IMG/CafeDaManha.jpg" nome="Café Da Manha"/>

                            <PlaylistCard img="IMG/123Segundos.jpg" nome="123 Segundos"/>
                            <PlaylistCard img="IMG/ParaTodasAsPess.jpg" nome="Para todas as pessoas"/>


                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                        </div>
                    </section>
                </div>
                
            </div>
        </div>
    )

}

export default bodyPrincipal
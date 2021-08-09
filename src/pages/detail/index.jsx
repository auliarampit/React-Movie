import React, { useState } from 'react'
import './detail.css'
import { PlayerControls, TopBar } from '../../components'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles'
import { Share } from '@material-ui/icons'
import imgDefault from '../../assets/images/placeholder.png'

const useStyles = makeStyles({
    playerWrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
})

function DetailMoviesScreen() {
    const [muted, setMuted] = useState(false)
    const [playing, setPlaying] = useState(true)
    const classes = useStyles()

    const handleMuted = () => {
        setMuted(!muted)
    }

    const handlePlaying = () => {
        setPlaying(!playing)
    }

    return (
        <>
            <TopBar />
            <div className='detail-movies-screen'>
                <div className="container-play-movie">
                    <div className={classes.playerWrapper}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            muted={muted}
                            playing={playing}
                            height='100%'
                            width='100%'
                        />

                        <PlayerControls
                            handleMuted={handleMuted}
                            handlePlaying={handlePlaying}
                            muted={muted}
                            playing={playing}
                        />
                    </div>
                </div>

                <div className="desc-detail-movie">
                    <div className="column-desc-movie-detail">
                        <span className='title-detail-movies'>Movie Title</span>
                        <div className="row-duration-detail">
                            <span className="movie-duration-detail">Full</span>
                            <Share />
                            <span className="movie-shared-detail">Shared</span>
                        </div>
                        <div className="row-duration-detail">
                            <span className="movie-Actor-detail">Actor:</span>
                            <span className="movie-shared-detail">Allen Ren Xing Fei Wayne Liu Zhao Yihuan Ge Shimin Jun Sheng</span>
                        </div>
                        <span className="text-desc-movie-detail">
                            Gu Chuan pemuda yang penuh semangat dan punya masa depan cerah.
                            Namun semua itu runtuh saat ia mengalami kecelakaan tragis yang mengakibatkan jantungnya terluka.
                            Untuk menyelamatkan nyawanya, dokter melakukan transplantasi jantung artifisial.
                            Saat mulai pulih, ia tak bisa lagi melakukan banyak olahraga dan menunjukkan kenaikan emosi yang kuat.
                            Maka ia harus mengubah gaya hidupnya, yang berarti pula mengubah jati dirinya.
                            Ia menghindari apapun yang menaikkan detak jantungnya,
                            walau itu artinya ia menjadi bayang-bayang dirinya yang lama.
                            Di tengah kedukaan itu, hadir Jiang Xiaoyu. Wanita itu juga punya masa lalu menyedihkan:
                            ia yatim piatu sejak kecil. Namun, ia selalu ceria dan berpikir positif.
                            Lama-lama, ada benih asmara antara Gu Chuan dan Xiao Yu. Namun, mengingat kondisi Gu Chuan,
                            akankah hubungan asmara ini berhasil?
                        </span>
                    </div>

                    <div className="column-desc-movie-detail-rigth">
                        <span className='title-detail-movies'>Most Popular Movies Today</span>
                        <div className="popular-movies-today">
                            <img src={imgDefault} alt="" className="img-popular-movies-today" />
                            <span className="title-popular-movies-today">
                                Title Movies
                            </span>
                        </div>

                        <div className="popular-movies-today">
                            <img src={imgDefault} alt="" className="img-popular-movies-today" />
                            <span className="title-popular-movies-today">
                                Title Movies
                            </span>
                        </div>

                        <div className="popular-movies-today">
                            <img src={imgDefault} alt="" className="img-popular-movies-today" />
                            <span className="title-popular-movies-today">
                                Title Movies
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailMoviesScreen

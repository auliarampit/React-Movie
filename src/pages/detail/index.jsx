import React, { useState, useEffect } from 'react'
import './detail.css'
import { PlayerControls, TopBar } from '../../components'
import { makeStyles } from '@material-ui/core/styles'
import { Share } from '@material-ui/icons'
import imgDefault from '../../assets/images/placeholder.png'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_detail } from '../../redux/detail/action'

const useStyles = makeStyles({
    playerWrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
})

function DetailMoviesScreen(props) {
    const [muted, setMuted] = useState(false)
    const [playing, setPlaying] = useState(true)
    const [data, setData] = useState(null)
    const [movies, setMovies] = useState(null)
    const classes = useStyles()

    const { state } = useLocation();

    console.log('state', state);

    useEffect(() => {
        getDetail();

    }, [])

    const getDetail = () => {
        props.onDetail_movies(state.imdbID, e => {
            setData(e);
            const dt = props.movies.Search.length > 4 ? props.movies.Search.slice(0, 4) : props.movies.Search.length
            setMovies(dt)
        })
    }

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

                        <PlayerControls
                            handleMuted={handleMuted}
                            handlePlaying={handlePlaying}
                            muted={muted}
                            playing={playing}
                            data={data}
                        />
                    </div>
                </div>

                <div className="desc-detail-movie">
                    <div className="column-desc-movie-detail">
                        <span className='title-detail-movies'>{data && data.Title}</span>
                        <div className="row-duration-detail">
                            <span className="movie-duration-detail">{data && data.Runtime},</span>
                            <span className="movie-duration-detail">{data && data.Genre},</span>
                            <Share />
                            <span className="movie-shared-detail">Shared</span>
                        </div>
                        <div className="row-duration-detail">
                            <span className="movie-Actor-detail">Actor:</span>
                            <span className="movie-shared-detail">{data && data.Actors}</span>
                        </div>
                        <span className="text-desc-movie-detail">
                            {data && data.Plot}
                        </span>
                    </div>

                    <div className="column-desc-movie-detail-rigth">
                        <span className='title-detail-movies'>Most Popular Movies Today</span>
                        {
                            movies && movies.map((item) => {
                                return (
                                    <div className="popular-movies-today">
                                        <img src={item.Poster} alt="" className="img-popular-movies-today" />
                                        <span className="title-popular-movies-today">
                                            {item.Title}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    // console.log('state', state);
    return {
        // detail: state.detail
        movies: state.movies.moviesData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDetail_movies: async (i, callback) => {
            const res = await dispatch(get_detail(i))
            callback(res)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailMoviesScreen)

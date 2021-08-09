/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './home.css'
import { Carousel, Movies, TopBar, ModalComp } from '../../components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_movies_all } from '../../redux/movies/action'
import { Grid } from '@material-ui/core'


function HomeScreen(props) {
    const nav = useHistory()
    const [open, setOpen] = React.useState(false);
    const [dataModal, setDataModal] = React.useState(null);

    useEffect(() => {
        getMovies()

    }, [])

    const getMovies = async () => {
        const page = 1
        props.onGetMovies(page, e => {
            // console.log('res', e);
        })
    }

    const handleOpen = (item) => {
        setOpen(true);
        setDataModal(item);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='home'>
            <TopBar />
            <Carousel />

            <div className="container-movies-home">
                <Grid container spacing={2}>
                    {
                        props.movies && props.movies.Search.map((item) => {
                            return (
                                <Movies data={item} onTap={() => handleOpen(item)} />
                            )
                        })
                    }
                </Grid>
                <ModalComp
                    handleClose={handleClose}
                    nav={() => nav.push('/detail-movie')}
                    open={open}
                    data={dataModal}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies.moviesData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMovies: async (page, callback) => {
            const res = await dispatch(get_movies_all(page))
            callback(res)
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (HomeScreen)

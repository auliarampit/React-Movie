/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './home.css'
import { Carousel, Movies, TopBar, ModalComp } from '../../components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_movies_all, search_movies } from '../../redux/movies/action'
import { Grid } from '@material-ui/core'


function HomeScreen(props) {
    const nav = useHistory()
    const [open, setOpen] = React.useState(false);
    const [dataModal, setDataModal] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [isloading, setIsloading] = React.useState(false);

    useEffect(() => {
        getMovies()
        window.addEventListener("scroll", isScrolling);

        return () => window.removeEventListener("scroll", isScrolling);

    }, [])

    const isScrolling = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        else {
            console.log("scrolling down");
            const pages = page + 1
            setPage(pages)
            props.onGetMovies(pages, e => {
                // if (e.Search && data) {
                //     setData(data.concat(e.Search));
                //     // setIsloading(false)
                // }
            })
            return
        }
    }

    const getMovies = async () => {
        props.onGetMovies(page, e => {
            setData(e.Search)
        })
    }

    const searching = s => {
        // props.onSearchMovies(s, e => {
        //     console.log('e search', e);
        // })
        console.log('we', s.target.value);
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
            <TopBar search={(s) => searching(s)} />
            <Carousel />

            <div className="container-movies-home">
                <Grid container spacing={2}>
                    {
                        data && data.map((item) => {
                            return (
                                <Movies data={item} onTap={() => handleOpen(item)} />
                            )
                        })
                    }
                </Grid>
                <ModalComp
                    handleClose={handleClose}
                    // nav={() => nav.push('/detail-movie')}
                    open={open}
                    data={dataModal}
                />
            </div>
            <div className="container-load-more-home">
                <span className='load-more-home'>load more ...</span>
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
        },
        onSearchMovies: async (s, callback) => {
            const res = await dispatch(search_movies(s))
            callback(res)
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (HomeScreen)

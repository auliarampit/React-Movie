import React from 'react'
import './movies.css'
import { Grid } from '@material-ui/core';
import imgDefault from '../../assets/images/placeholder.png'

function Movies({image, title, onTap}) {
    return (
        <Grid onClick={onTap} container spacing={2}>
            <Grid item xs={6} lg={2} sm={3} md={2} >
                <div className='movies'>
                    <img src={image ? image : imgDefault} alt="" className="img-movies" />
                    <span className="title-movies">Title Movies</span>
                </div>
            </Grid>

            <Grid item xs={6} lg={2} sm={3} md={2} >
                <div className='movies'>
                    <img src={image ? image : imgDefault} alt="" className="img-movies" />
                    <span className="title-movies">Title Movies alalalalalalalal</span>
                </div>
            </Grid>

            <Grid item xs={6} lg={2} sm={3} md={2} >
                <div className='movies'>
                    <img src={image ? image : imgDefault} alt="" className="img-movies" />
                    <span className="title-movies">Title Movies</span>
                </div>
            </Grid>


            <Grid item xs={6} lg={2} sm={3} md={2} >
                <div className='movies'>
                    <img src={image ? image : imgDefault} alt="" className="img-movies" />
                    <span className="title-movies">Title Movies</span>
                </div>
            </Grid>


            <Grid item xs={6} lg={2} sm={3} md={2} >
                <div className='movies'>
                    <img src={image ? image : imgDefault} alt="" className="img-movies" />
                    <span className="title-movies">Title Movies</span>
                </div>
            </Grid>

            <Grid item xs={6} lg={2} sm={3} md={2} >
                <div className='movies'>
                    <img src={image ? image : imgDefault} alt="" className="img-movies" />
                    <span className="title-movies">Title Movies</span>
                </div>
            </Grid>
        </Grid>
    )
}

export default Movies

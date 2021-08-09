import React from 'react'
import './movies.css'
import { Grid } from '@material-ui/core';
import imgDefault from '../../assets/images/placeholder.png'

function Movies({ data, onTap }) {
    return (
        <Grid onClick={onTap} item xs={6} lg={2} sm={3} md={2} >
            <div className='movies'>
                <img src={data.Poster ? data.Poster : imgDefault} alt="" className="img-movies" />
                <span className="title-movies">{data.Title}</span>
            </div>
        </Grid>

    )
}

export default Movies

import axios from "axios"
import baseUrl from "../../config"

export const movies_data = moviesData => {
    return {
        type: 'GET_MOVIES',
        payload: {
            moviesData,
        }
    }
}

export const get_movies_all = page => {
    return dispatch => {
        return new Promise((resolve) => {
            axios.get(baseUrl + `s=bat&page=${page}`)
                .then((res) => {
                    if (res.data.error) {
                        resolve(res.data)
                    } else {
                        dispatch(movies_data(res.data))
                        resolve(res.data)
                    }
                })
                .catch((err) => {
                    resolve(err)
                })
        })
    }
}

export const search_movie_data = moviesData => {
    return {
        type: 'GET_MOVIES',
        payload: {
            moviesData,
        }
    }
}

export const search_movies = s => {
    return dispatch => {
        return new Promise((resolve) => {
            axios.get(baseUrl + `s=${s}`)
                .then((res) => {
                    if (res.data.error) {
                        resolve(res.data)
                    } else {
                        dispatch(search_movie_data(res.data))
                        resolve(res.data)
                    }
                })
                .catch((err) => {
                    resolve(err)
                })
        })
    }
}
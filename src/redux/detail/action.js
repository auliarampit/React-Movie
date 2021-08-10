import axios from "axios"
import baseUrl from "../../config"

export const detail_movies_data = detail => {
    return {
        type: 'GET_DETAIL',
        payload: {
            detail,
        }
    }
}

export const get_detail = i => {
    return dispatch => {
        return new Promise((resolve) => {
            axios.get(baseUrl + `i=${i}`)
                .then((res) => {
                    if (res.data.error) {
                        resolve(res.data)
                    } else {
                        dispatch(detail_movies_data(res.data))
                        resolve(res.data)
                    }
                })
                .catch((err) => {
                    resolve(err)
                })
        })
    }
}
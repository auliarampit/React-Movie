const initialState = {
    moviesData: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                moviesData: {
                    ...action.payload.moviesData
                }
            }
        default:
            return state
    }
}

export default reducer;
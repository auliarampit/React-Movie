const initialState = {
    detail: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                detail: {
                    ...action.payload.detail
                }
            }
        default:
            return state
    }
}

export default reducer;
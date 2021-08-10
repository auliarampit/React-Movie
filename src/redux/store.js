import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import movies from './movies/reducer'
import detail from './detail/reducer'

const rootReducer = combineReducers({
    movies,
    detail,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
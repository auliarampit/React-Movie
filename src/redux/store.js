import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import movies from './movies/reducer'

const rootReducer = combineReducers({
    movies,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
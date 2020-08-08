import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import TracksReducer from './reducers/TracksReducer'

const store = createStore(
    TracksReducer,
    applyMiddleware(thunk)
)

export default store
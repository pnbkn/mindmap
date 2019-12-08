import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const user = (state=[], action) => async dispatch => {
    return state
}

const reducer = combineReducers({user})
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store

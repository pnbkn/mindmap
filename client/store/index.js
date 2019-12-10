import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js';
import { getUsers, createUser, updateUser, onLogin } from './thunks.js'


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
export { getUsers, createUser, updateUser, onLogin }
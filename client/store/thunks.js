import { setUsers, _createUser, _updateUser, setLoginError, setLoginSuccess } from './actions.js';
import axios from 'axios';

const getUsers = ()=> {
  return async(dispatch)=> {
    const users = (await axios.get('api/users')).data
    dispatch(setUsers(users))
  }
};

const createUser = (user)=> {
  return async(dispatch) => {
    const created = (await axios.post('/api/register', user)).data
    dispatch(_createUser(created))
  }
}

const updateUser = (id, payload) => async dispatch => {
  const user = (await axios.put(`/api/users`, {id: id, ...payload})).data
  dispatch(_updateUser(user));
};

const onLogin = (user) => {
  return async(dispatch)=> {
    await axios.post('/api/login', user)
    .then(response => {
      dispatch(setLoginSuccess(response.data))
    })
    .catch(e => {
      return dispatch(setLoginError(e.message))
    })
  }
}

export { getUsers, createUser, updateUser, onLogin }

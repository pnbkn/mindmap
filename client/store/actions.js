//Action Types
const SET_USERS = 'SET_USERS';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";

//Action Creators
const setUsers = (users)=> ({ type: SET_USERS, users });
const _createUser = (user)=> ({ type: CREATE_USER, user });
const _updateUser = (user) => ({ type: UPDATE_USER, user })
const setLoginError = (err) => ({ type: SET_LOGIN_ERROR, err });
const setLoginSuccess = (user) => ({ type: SET_LOGIN_SUCCESS, user });

export { setUsers, _createUser, _updateUser, setLoginError, setLoginSuccess, SET_USERS, CREATE_USER, UPDATE_USER, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR };

//Action Types
const SET_USERS = "SET_USERS";
const CREATE_USER = "CREATE_USER";
const UPDATE_USER = "UPDATE_USER";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const CREATE_NODE = "CREATE_NODE";
const SET_NODES = "SET_NODES";

//Action Creators
const setUsers = users => ({ type: SET_USERS, users });
const _createUser = user => ({ type: CREATE_USER, user });
const _updateUser = user => ({ type: UPDATE_USER, user });
const setLoginError = err => ({ type: SET_LOGIN_ERROR, err });
const setLoginSuccess = user => ({ type: SET_LOGIN_SUCCESS, user });
const _createNode = node => ({ type: CREATE_NODE, node });
const _setNodes = node => ({ type: SET_NODES, node });

export {
  setUsers,
  _createUser,
  _updateUser,
  _createNode,
  _setNodes,
  setLoginError,
  setLoginSuccess,
  SET_USERS,
  CREATE_USER,
  UPDATE_USER,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  CREATE_NODE,
  SET_NODES
};

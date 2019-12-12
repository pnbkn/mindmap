//Action Types
const SET_USERS = "SET_USERS";
const CREATE_USER = "CREATE_USER";
const UPDATE_USER = "UPDATE_USER";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const CREATE_NODE = "CREATE_NODE";
const SET_NODES = "SET_NODES";
const CREATE_SUBJECT = "CREATE_SUBJECT";
const SET_SUBJECT = "SET_SUBJECT";

//Action Creators
const setUsers = users => ({ type: SET_USERS, users });
const _createUser = user => ({ type: CREATE_USER, user: user });
const _updateUser = user => ({ type: UPDATE_USER, user });
const setLoginError = err => ({ type: SET_LOGIN_ERROR, err });
const setLoginSuccess = user => ({ type: SET_LOGIN_SUCCESS, user });
const _setNodes = nodes => ({ type: SET_NODES, nodes });
const setSubjectAction = nodes => ({ type: SET_SUBJECT, subjects });
const createNodeAction = node => {
  return { type: CREATE_NODE, node: node };
};
const createSubjectAction = subject => {
  return { type: CREATE_SUBJECT, subject: subject };
};

export {
  setUsers,
  _createUser,
  _updateUser,
  createNodeAction,
  createSubjectAction,
  setSubjectAction,
  _setNodes,
  setLoginError,
  setLoginSuccess,
  SET_USERS,
  CREATE_USER,
  CREATE_SUBJECT,
  UPDATE_USER,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_SUBJECT,
  CREATE_NODE,
  SET_NODES
};

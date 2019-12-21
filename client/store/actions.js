//Action Types
const SET_USERS = "SET_USERS";
const CREATE_USER = "CREATE_USER";
const UPDATE_USER = "UPDATE_USER";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGOUT_SUCCESS = "SET_LOGOUT_SUCCESS";
const CREATE_NODE = "CREATE_NODE";
const SET_NODES = "SET_NODES";
const CREATE_SUBJECT = "CREATE_SUBJECT";
const SET_SUBJECT = "SET_SUBJECT";
const SET_TREE = "SET_TREE";
const CREATE_TREE = "CREATE_TREE";
const SET_AUTH = "SET_AUTH";

//Action Creators
const setUsers = users => ({ type: SET_USERS, users });
const _createUser = user => ({ type: CREATE_USER, user: user });
const _updateUser = user => ({ type: UPDATE_USER, user });
const setLoginError = err => ({ type: SET_LOGIN_ERROR, err });
const setLoginSuccess = user => ({ type: SET_LOGIN_SUCCESS, user });
const setLogoutSuccess = user => ({ type: SET_LOGOUT_SUCCESS, user });
const _setNodes = nodes => ({ type: SET_NODES, nodes });
const setSubjectAction = subjects => ({ type: SET_SUBJECT, subjects });
const createNodeAction = node => {
  return { type: CREATE_NODE, node: node };
};
const createSubjectAction = subject => {
  return { type: CREATE_SUBJECT, subject: subject };
};
const setTreeAction = trees => ({ type: SET_TREE, trees });
const createTreeAction = tree => {
  return { type: CREATE_TREE, tree };
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
  setLogoutSuccess,
  SET_USERS,
  CREATE_USER,
  CREATE_SUBJECT,
  UPDATE_USER,
  SET_LOGIN_SUCCESS,
  SET_LOGOUT_SUCCESS,
  SET_LOGIN_ERROR,
  SET_SUBJECT,
  CREATE_NODE,
  SET_NODES,
  SET_TREE,
  CREATE_TREE,
  setTreeAction,
  createTreeAction,
  SET_AUTH
};

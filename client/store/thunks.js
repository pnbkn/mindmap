import {
  setUsers,
  _createUser,
  _updateUser,
  createNodeAction,
  createSubjectAction,
  setSubjectAction,
  _setNodes,
  setLoginError,
  setLoginSuccess,
  setTreeAction,
  createTreeAction,
  SET_AUTH
} from "./actions";
import axios from "axios";

const getUsers = () => {
  return async dispatch => {
    const users = (await axios.get("/api/users")).data;
    dispatch(setUsers(users));
  };
};

const createUser = user => {
  return async dispatch => {
    const created = (await axios.post("/api/register", user)).data;
    dispatch(_createUser(created));
  };
};

const getNodes = () => {
  return async dispatch => {
    const nodes = (await axios.get("/api/nodes")).data;
    dispatch(_setNodes(nodes));
  };
};

const createNode = payload => {
  return async dispatch => {
    const newIdea = await axios.post("/api/nodes", payload);
    dispatch(createNodeAction(newIdea.data));
  };
};

const getSubjects = () => {
  return async dispatch => {
    const subjects = (await axios.get("/api/subjects")).data;
    dispatch(setSubjectAction(subjects));
  };
};

const createSubject = payload => {
  return async dispatch => {
    const newSubject = await axios.post("/api/subjects", payload);
    dispatch(createSubjectAction(newSubject.data));
  };
};

const getTrees = () => {
  return async dispatch => {
    const trees = (await axios.get("/api/trees")).data;
    dispatch(setTreeAction(trees));
  };
};

const createTree = payload => {
  return async dispatch => {
    const newTree = await axios.post("/api/trees", payload);
    dispatch(createTreeAction(newTree.data));
  };
};

const updateUser = (id, payload) => async dispatch => {
  const user = (await axios.put(`/api/users`, { id: id, ...payload })).data;
  dispatch(_updateUser(user));
};

const onLogin = user => {
  console.log("ON LOGIN ", user);
  return async dispatch => {
    await axios
      .post("/api/login", user)
      .then(response => {
        dispatch(setLoginSuccess(response.data));
      })
      .catch(e => {
        return dispatch(setLoginError(e.message));
      });
  };
};

const attemptSessionLogin = () => {
  return async dispatch => {
    const auth = (await axios.get("/api/login")).data;
    dispatch({ type: SET_AUTH, auth });
  };
};
export {
  getUsers,
  attemptSessionLogin,
  createUser,
  updateUser,
  onLogin,
  createNode,
  createSubject,
  getSubjects,
  getNodes,
  createNodeAction,
  createSubjectAction,
  setSubjectAction,
  getTrees,
  createTree,
  SET_AUTH
};

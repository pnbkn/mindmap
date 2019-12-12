import {
  setUsers,
  _createUser,
  _updateUser,
  createNodeAction,
  createSubjectAction,
  setSubjectAction,
  _setNodes,
  setLoginError,
  setLoginSuccess
} from "./actions";
import axios from "axios";

const getUsers = () => {
  return async dispatch => {
    const users = (await axios.get("api/users")).data;
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
    const subjects = (await axios.get("api/subjects")).data;
    dispatch(setSubjectAction(subjects));
  };
};

const createSubject = payload => {
  console.log("THUNKS START ", payload);

  return async dispatch => {
    const newSubject = await axios.post("/api/subjects", payload);
    console.log("THUNKS DISPATCH ", newSubject.data);
    dispatch(createSubjectAction(newSubject.data));
  };
};

const updateUser = (id, payload) => async dispatch => {
  const user = (await axios.put(`/api/users`, { id: id, ...payload })).data;
  dispatch(_updateUser(user));
};

const onLogin = user => {
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
export {
  getUsers,
  createUser,
  updateUser,
  onLogin,
  createNode,
  createSubject,
  getSubjects,
  getNodes,
  createNodeAction,
  createSubjectAction,
  setSubjectAction
};

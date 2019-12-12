import {
  setUsers,
  _createUser,
  _updateUser,
  createNodeAction,
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
  console.log("THUNKS START ", payload);

  return async dispatch => {
    const newIdea = await axios.post("/api/nodes", payload);
    console.log("THUNKS DISPATCH ", newIdea.data);
    dispatch(createNodeAction(newIdea.data));
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
  getNodes,
  createNodeAction
};

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import thunkMiddleware from "redux-thunk";
import reducer from "./reducer.js";
import {
  getUsers,
  createUser,
  updateUser,
  onLogin,
  createNode,
  createSubject,
  getSubjects,
  getNodes,
  getTrees,
  createTree,
  attemptSessionLogin
} from "./thunks.js";

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export {
  getUsers,
  createUser,
  updateUser,
  onLogin,
  createNode,
  getNodes,
  createSubject,
  getSubjects,
  getTrees,
  createTree,
  attemptSessionLogin
};

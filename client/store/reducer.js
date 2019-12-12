import { combineReducers } from "redux";
import {
  SET_USERS,
  CREATE_USER,
  UPDATE_USER,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  CREATE_NODE,
  SET_NODES,
  SET_SUBJECT,
  CREATE_SUBJECT
} from "./actions.js";

const reducer = combineReducers({
  users: (state = [], action) => {
    if (action.type === SET_USERS) {
      return action.users;
    }
    if (action.type === CREATE_USER) {
      return [...state, action.user];
    }
    if (action.type === UPDATE_USER) {
      return state.map(user =>
        user.id === action.user.id ? action.user : user
      );
    }
    return state;
  },
  login: (state = [], action) => {
    if (action.type === SET_LOGIN_SUCCESS) {
      return {
        ...state,
        email: "",
        password: "",
        err: null,
        user: action.user
      };
    }
    if (action.type === SET_LOGIN_ERROR) {
      return { ...state, email: "", password: "", user: null, err: action.err };
    }
    return state;
  },
  subjects: (state = [], action) => {
    if (action.type === SET_SUBJECT) {
      return action.subjects;
    }
    if (action.type === CREATE_SUBJECT) {
      console.log("REDUCER ", action.node);
      return [...state, action.subject];
    }
    return state;
  },
  nodes: (state = [], action) => {
    if (action.type === SET_NODES) {
      return action.nodes;
    }
    if (action.type === CREATE_NODE) {
      console.log("REDUCER ", action.node);
      return [...state, action.node];
    }
    return state;
  }
});

export default reducer;

import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { HashRouter, BrowserRouter } from "react-router-dom";

export const Home = props => {
  console.log("LOGIN ", props);
  return (
    <div>
      <Login />
    </div>
  );
};

import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const Home = props => {
  return (
    <div>
      {/* passing props to the chil component so it can redirect */}
      <Login {...props} />
    </div>
  );
};

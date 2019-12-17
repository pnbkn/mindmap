import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;

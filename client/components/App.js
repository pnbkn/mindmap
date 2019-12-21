import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("NAV ", this.props);
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;

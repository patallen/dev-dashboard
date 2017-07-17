import React, { Component } from "react";
import Header from "containers/Header";

import "./styles/global.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

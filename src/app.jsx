import React, { Component } from 'react';
import './styles/global.css';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

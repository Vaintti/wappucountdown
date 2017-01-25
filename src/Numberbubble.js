import React, { Component } from 'react';
import './Numberbubble.css';

class Numberbubble extends Component {
  render() {
    return (
      <div className="Numberbubble">
        <div className="text">{this.props.name}</div>
        <hr/>
        <div className="number">{this.props.number}</div>
      </div>
    );
  }
}

export default Numberbubble;
import "./css/Controls.css";
import React, { Component } from "react";

class Controls extends Component {

  buildControl = () => {
    return !this.props.gameOver ?
    [...Array(this.props.pinsUp + 1)].map((o, i) => (
      <button key={i} className="pins-down" onClick={() => this.props.handleRoll(i)}>
        {i}
      </button>
    )) : ""
  }

  render() {
    return (
      <div className="controls">
        <div className="controls-left">
          {this.buildControl()}
        </div>
      </div>
    )
  }
}

export default Controls;

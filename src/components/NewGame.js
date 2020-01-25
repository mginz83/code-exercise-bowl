import "./css/NewGame.css";
import React, { Component } from "react";

class NewGame extends Component {
  render() {
    return (
      <div className="new">
          <div className="new-game" onClick={() => this.props.handleReset()}>
            Start New Game
          </div>
      </div>
    )
  }
}

export default NewGame;

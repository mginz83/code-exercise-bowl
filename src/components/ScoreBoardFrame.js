import "./css/ScoreBoard.css";
import React, { Component } from "react";

class ScoreBoardFrame extends Component {
  render() {
    return (
      <div className="each-frame">
        <div className="frame-number">{this.props.frameNumber}</div>
        <div className="frame-score">
          <div className="box first">{this.props.leftBox}</div>
          <div className="box second">{this.props.rightBox}</div>
          <div className="box extra">{this.props.extraBox}</div>
        </div>
        <div className="running-score">{!isNaN(this.props.gameScore) && this.props.gameScore}</div>
      </div>
    )
  }
}

export default ScoreBoardFrame;

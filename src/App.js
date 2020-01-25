import "./App.css";
import "./components/css/ScoreBoard.css";
import React, { Component } from "react";
import BowlingGame from "./components/BowlingGame";
import ScoreBoardFrame from "./components/ScoreBoardFrame";
import Controls from "./components/Controls";
import NewGame from "./components/NewGame";

import { isGameOver, finalScore, pinsStillStanding} from './components/HelperFunctions';

class Game extends Component {
  constructor() {
    super();
    this.bowlingGame = BowlingGame.createNewBowlingGame();
    this.state = { bowlingGameScore: this.bowlingGame.calcScore() };
  }

  rollBall = pinsDown => {
    this.bowlingGame.rollingBall(pinsDown);
    this.setState({ bowlingGameScore: this.bowlingGame.calcScore() });
  };

  newGame = () => {
    this.bowlingGame.restartGame();
    this.setState({ bowlingGameScore: this.bowlingGame.calcScore() });
  };

  render() {
    const { bowlingGameScore } = this.state;
    return (
      <div>
        <Controls
          handleRoll={this.rollBall}
          pinsUp={pinsStillStanding(this.bowlingGame.standingPins())}
          gameOver={isGameOver(this.state.bowlingGameScore[9].gameover)}
          finalScore={finalScore(this.state.bowlingGameScore[9].cumulativeScore)}
        />
        <div className="score-board">
          {[...Array(10)].map((o, i) => (
            <ScoreBoardFrame
              key={i}
              frameNumber={i + 1}
              leftBox={bowlingGameScore[i].firstRollBox}
              rightBox={bowlingGameScore[i].secondRollBox}
              extraBox={bowlingGameScore[i].finalRollBox}
              gameScore={bowlingGameScore[i].cumulativeScore}
            />
          ))}
        </div>
        <NewGame handleReset={this.newGame} />
      </div>
    );
  }
}

const App = () => (
  <div className="App">
    <Game />
  </div>
);

export default App;

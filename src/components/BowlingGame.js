import { frameSum, isStrike, isSpare, bonusForStrike, bonusForSpare} from './HelperFunctions';

class BowlingGame {
  constructor() {
    this.ballRolled = [];
    this.currentBallRoll = 0;
    this.maxScore = 10;
  }

  static createNewBowlingGame = () => new BowlingGame();

  rollingBall = pinsDown => (this.ballRolled[this.currentBallRoll++] = pinsDown);

  standingPins = () => {
    const bowlingScore = this.calcScore();
    let stillStanding = this.maxScore;
    bowlingScore.forEach(score => {
      if (score.pinsStillStanding !== null && !isNaN(score.pinsStillStanding)) {
        stillStanding = score.pinsStillStanding;
      }
    });
    return stillStanding;
  };

  restartGame = () => {
    this.ballRolled = [];
    this.currentBallRoll = 0;
  };

  calcScore = () => {
    let bowlingScore = [];
    let score = 0;
    let frameIndex = 0;

    const firstRoll = () => this.ballRolled[frameIndex];
    const secondRoll = () => this.ballRolled[frameIndex + 1];
    const finalRoll = () => this.ballRolled[frameIndex + 2];

    const saveFrame = (bowlingScore, firstRollBox, secondRollBox, score, pinsStillStanding) => {
      if (bowlingScore.length < 9) {
        bowlingScore.push({
          firstRollBox,
          secondRollBox,
          cumulativeScore: score,
          pinsStillStanding
        });
      } else {
        const scoreBoardBox1 = firstRoll() === this.maxScore ? "X" : firstRoll();
        const scoreBoardBox2 = secondRoll() === this.maxScore ? "X" : isSpare() ? "/" : secondRoll();
        let scoreBoardExtraBox;
        if (finalRoll() === this.maxScore) {
          scoreBoardExtraBox = "X";
        } else if (firstRoll() === this.maxScore || firstRoll() + secondRoll() === this.maxScore) {
          scoreBoardExtraBox = finalRoll();
        } else {
          scoreBoardExtraBox = "";
        }

        bowlingScore.push({
          firstRollBox: scoreBoardBox1,
          secondRollBox: scoreBoardBox2,
          cumulativeScore: score,
          pinsStillStanding,
          finalRollBox: scoreBoardExtraBox,
          gameover: isNaN(score) ? false : true
        });
      }
    };

    [...Array(this.maxScore)].forEach((_, frame) => {
      if (isStrike(firstRoll())) {
        score += this.maxScore + bonusForStrike(secondRoll(), finalRoll());
        saveFrame(bowlingScore, "", "X", score, this.maxScore);
        frameIndex++;
      } else if (isSpare(firstRoll(), secondRoll())) {
        score += this.maxScore + bonusForSpare(finalRoll());
        saveFrame(bowlingScore, firstRoll(), "/", score, this.maxScore);
        frameIndex += 2;
      } else {
        score += frameSum(firstRoll(), secondRoll());
        const pinsUp = secondRoll() !== undefined ? this.maxScore : this.maxScore - firstRoll();
        saveFrame(bowlingScore, firstRoll(), secondRoll(), score, pinsUp);
        frameIndex += 2;
      }
    });

    return bowlingScore;
  };
}

export default BowlingGame;

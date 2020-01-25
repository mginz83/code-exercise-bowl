//What is the sum of all of the frames?
export function frameSum(firstRoll, secondRoll) {
  return firstRoll + secondRoll;
}
//Was this a strike?
export function isStrike(firstRoll) {
  return firstRoll === 10;
}
//Was this a spare?
export function isSpare(firstRoll, secondRoll) {
  return frameSum(firstRoll, secondRoll) === 10;
}
//Is there a bonus for a strike?
export function bonusForStrike(secondRoll, finalRoll) {
  return secondRoll + finalRoll;
}
//Return spare bonus.
export function bonusForSpare(finalRoll) {
  return finalRoll;
}
//Is the game over when final score is calcualted?
export function isGameOver(gameover) {
  return gameover;
}
//Calculate Final ScoreBoard
export function finalScore(score) {
  return score;
}
//How many pins are still standing?
export function pinsStillStanding(pins) {
  return pins;
}

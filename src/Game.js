import React from "react";
import { observable, computed, action, decorate, when } from "mobx";
import { observer } from "mobx-react";
import { colors } from "./utils";
import Color from "./Color";
import { Name, Grid } from "./Grid";

class Game extends React.Component {
  static bgColors = {
    playing: "#ccc",
    won: "green",
    lost: "red"
  };
  intervalId = null;
  gameStatus = "new";
  remainingSeconds = 3;
  color = null;
  colorsList = [];
  // color = colors[Math.floor(Math.random() * colors.length)];
  // num = null;

  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
    this.makeArray();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  makeArray = () => {
    this.activeColor = colors[Math.floor(Math.random() * colors.length)];
    this.colorsList.push(this.activeColor);
    while (this.colorsList.length < 4) {
      let newColor = colors[Math.floor(Math.random() * colors.length)];
      if (newColor !== this.activeColor) {
        this.colorsList.push(newColor);
      }
    }
  };

  randomNumberBetween = (min = 100, max = 1000) => {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n.toString();
  };

  randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  changeGameStatus = status => (this.gameStatus = status);

  gameLost = () => {
    clearInterval(this.intervalId);
    this.changeGameStatus("lost");
    this.remainingSeconds = 0;
  };

  get outOfTime() {
    return this.remainingSeconds === 0;
  }

  startGame = () => {
    this.changeGameStatus("playing");
    this.intervalId = setInterval(() => {
      const newRemainingSeconds = this.remainingSeconds - 1;
      when(() => this.outOfTime, () => this.gameLost());
      this.remainingSeconds = newRemainingSeconds;
    }, 1000);
  };

  render() {
    return (
      <div className="game">
        <h1>Game Component</h1>
        <div
          className="target"
          style={{ backgroundColor: Game.bgColors[this.gameStatus] }}
        >
          {this.gameStatus === "new" ? "?" : this.gameStatus}
        </div>
        <div className="footer">
          {this.gameStatus === "new" ? (
            <button onClick={this.startGame}>Start</button>
          ) : (
            <div className="timer-value">{this.remainingSeconds}</div>
          )}
          {["won", "lost"].includes(this.gameStatus) && (
            <button onClick={this.props.onPlayAgain}>Play Again</button>
          )}
        </div>
        <Color color={this.activeColor} />
        <Grid>{this.colorsList.map(color => <Name name={color} />)}</Grid>
      </div>
    );
  }
}

decorate(Game, {
  gameStatus: observable,
  remainingSeconds: observable,
  num: observable,
  changeGameStatus: action,
  startGame: action,
  gameLost: action,
  outOfTime: computed
});

export default observer(Game);

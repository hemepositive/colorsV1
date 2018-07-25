import React from "react";
import ReactDOM from "react-dom";
import { observable, computed, action, decorate, when } from "mobx";
import { observer } from "mobx-react";

import Game from "./Game";
import Links from "./Links";
import "./styles.css";

// Ideas from:
// https://medium.freecodecamp.org/do-you-want-to-learn-more-about-react-lets-build-and-then-play-a-game-218e0da5be44
// CODE: https://jscomplete.com/repl/?j=rJj8poQyM

// const Timer = observer(class Timer
const App = observer(
  class App extends React.Component {
    gameId = 1;
    resetGame = () => {
      this.gameId = this.gameId + 1;
    };

    render() {
      return (
        <div className="App">
          <h1>My Game Header</h1>
          <hr />
          <Game
            key={this.gameId}
            autoPlay={this.gameId > 1}
            onPlayAgain={this.resetGame}
          />
          <hr />
          <Links />
        </div>
      );
    }
  }
);

decorate(App, {
  gameId: observable,
  resetGame: action
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

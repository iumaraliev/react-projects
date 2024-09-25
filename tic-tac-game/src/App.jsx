import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex, columnIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <div className="container">
      <Header>Tic Tac Toe Game</Header>
      <ul className="players">
        <Player
          initialName={"Player 1"}
          playerSymbol={"X"}
          isActive={activePlayer === "X"}
        />
        <Player
          initialName={"Player 1"}
          playerSymbol={"O"}
          isActive={activePlayer === "O"}
        />
      </ul>

      <Gameboard
        onSelectSquare={handleSelectSquare}
        turns={gameTurns}
      />

      <Log turns={gameTurns}/>
    </div>
  );
};

export default App;

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Gameboard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard;

  for(const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
    //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, columnIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       // Should be added to the notes
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];

  //       updatedGameBoard[rowIndex][columnIndex] = activePlayer;
  //       return updatedGameBoard;
  //     });

  //     onSelectSquare();
  //   };
  return (
    <div className="game-board-wrapper">
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnIndex) => (
                <li key={columnIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Gameboard;

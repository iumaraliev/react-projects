const Log = ({ turns }) => {
  console.log(turns);
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.squre.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;

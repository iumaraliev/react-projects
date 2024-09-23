import { useState } from 'react';

const Player = ({ initialName, playerSymbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  const playerInfo = <span className="player-name">{playerName}</span>;
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={handleChange} />
        ) : (
          playerInfo
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;

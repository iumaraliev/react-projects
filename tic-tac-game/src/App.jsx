import './App.css';
import Header from './components/Header';
import Player from './components/Player';

const App = () => {
  return (
    <div className="container">
      <Header>Tic Tac Toe Game</Header>
      <ul className="players">
        <Player initialName={'Player 1'} playerSymbol={'X'} />
        <Player initialName={'Player 1'} playerSymbol={'O'} />
      </ul>
    </div>
  );
};

export default App;

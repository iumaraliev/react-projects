import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('Type it here....');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="input-field">
        
      </div>

      <div className="login-page"></div>
    </>
  );
};

export default App;

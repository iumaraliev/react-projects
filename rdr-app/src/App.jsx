import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import TabMenu from './components/TabMenu';
import { CHARACTERS } from './Data';
const App = () => {
  const [selected, setSelected] = useState();

  const handleClick = (selectedButton) => {
    setSelected(selectedButton);
    console.log(selectedButton + " is clicked")
  }

  let tabContent = "Please select a character";

  if (selected) {
    tabContent = (
      <div className='tab-content'>
        <div className="info">
          <h3>{CHARACTERS[selected].fullName}</h3>
          <p>{CHARACTERS[selected].information}</p>
        </div>
        <img src={CHARACTERS[selected].imgSource} alt='Picture of the character' />
      </div>
    )
  }

  return (
    <div className='container'>
      <Header className='header'>Red Dead Redemtion Characters</Header>

      <div className="tab-menu-wrapper">
        <TabMenu onClick={() => handleClick("arthur")}>Arthur Morgan</TabMenu>
        <TabMenu onClick={() => handleClick("dutch")}>Dutch Van Der Linde</TabMenu>
        <TabMenu onClick={() => handleClick("micah")}>Micah Bell</TabMenu>
        <TabMenu onClick={() => handleClick("john")}>John Marston</TabMenu>
      </div>

      {tabContent}

    </div >
  )
}

export default App;
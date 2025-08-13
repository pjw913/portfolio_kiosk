import './App.css';
import FirstFloor from './Components/FirstFloor';
import SecondFloor from './Components/SecondFloor';
import ThirdFloor from './Components/ThirdFloor';
import BasementFloor from './Components/BasementFloor';
import { useState } from 'react';

function App() {
  const [currentFloor, setCurrentFloor] = useState(1);

  const goUp = () =>{
    setCurrentFloor(prev => (prev < 3 ? prev + 1 : prev));
  }

  const goDown = () =>{
    setCurrentFloor(prev => (prev > 0 ? prev - 1 : prev));
  }

  const renderFloor = () =>{
    switch (currentFloor) {
      case 0:
        return <BasementFloor goUp={goUp} goDown={goDown} />;
      case 1:
        return <FirstFloor goUp={goUp} goDown={goDown} />;
      case 2:
        return <SecondFloor goUp={goUp} goDown={goDown} />;
      case 3:
        return <ThirdFloor goUp={goUp} goDown={goDown} />;
      default:
        return null;
    }
  }
  return (
    <section className="app-container">
      {renderFloor()}
    </section>
  );
}

export default App;

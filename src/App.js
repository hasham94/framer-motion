import Splash from './components/Splash'
import './App.css';
import { useState } from 'react';

function App() {
  const [swipeValue, setSwipeValue] = useState(0)
  return (
    <div className="App">
      {
        swipeValue < 100 && swipeValue > -100 ?
          <>
            <Splash setSwipeValue={setSwipeValue} />
            <span>Swipe Left or right</span>
          </> : null
      }
      {
        swipeValue >= 100 ? 'you swiped to right' : 'you swiped left'
      }

    </div>
  );
}

export default App;

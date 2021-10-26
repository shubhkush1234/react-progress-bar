import React, {useState} from 'react';
import './App.css';
import Progress from './Components/Progress';

function App() {
  const [done, setDone] = useState([]);
  return (
    <div className="App">
      <h1>React Progress Bar</h1>
      <Progress done={70}/>
    </div>
  );
}

export default App;

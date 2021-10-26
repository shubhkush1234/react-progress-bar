import React, {useState} from 'react';
import './App.css';
import Progress from './Components/Progress';

function App() {
  const [done, setDone] = useState([]);
  return (
    <div className="">
      <h1>React Progress Bar</h1>
      <Progress done={70}/>
      <Progress done={60}/>
      <Progress done={50}/>
      <Progress done={40}/>
      <Progress done={10}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Title from './component/title/Title';
import TimeLength from './component/title/timeLength/TimeLength';
import View from './component/view/View';



const App: React.FC = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);

  return (
    <>
      <Title />
      <TimeLength 
        breakTime={breakTime} 
        sessionTime={sessionTime} 
        setBreakTime={setBreakTime} 
        setSessionTime={setSessionTime} 
      />
      <View sessionTime={sessionTime} />
      <footer>
        <p>Created by: Chenxi</p>
      </footer>
    </>
  );
}

export default App;

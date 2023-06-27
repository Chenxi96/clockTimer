import React, { useState } from 'react';
import './App.css';
import Title from './component/title/Title';
import TimeLength from './component/timeLength/TimeLength';
import View from './component/view/View';



const App: React.FC = () => {
  const [breakTime, setBreakTime] = useState<number>(5);
  const [sessionTime, setSessionTime] = useState<number>(25);

  return (
    <>
      <Title />
      <TimeLength 
        breakTime={breakTime} 
        sessionTime={sessionTime} 
        setBreakTime={setBreakTime} 
        setSessionTime={setSessionTime} 
      />
      <View sessionTime={sessionTime} 
      breakTime={breakTime} 
      setBreakTime={setBreakTime} 
      setSessionTime={setSessionTime}
      />
      <footer>
        <p>Created by: Chenxi</p>
      </footer>
    </>
  );
}

export default App;

import { useContext } from 'react';
import { Context } from './components/Context/Context';
import './App.css';
import MainHeader from './components/MainHeader';
import Sidebar from './components/Sidebar/Sidebar'; 
import { useState } from 'react';
function App(isActive) {
    const {isOpen} = useContext(Context);
  
  return (
    <div className="App">
      {console.log(isOpen)}
      <Sidebar />
        <MainHeader value = {!isOpen}/>
    </div>
  );
}

export default App;

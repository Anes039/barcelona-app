import React from 'react';
import MainHeader from './components/MainHeader';
import Sidebar from './components/Sidebar/Sidebar'; 
import { useContext } from 'react';
import { Context } from './components/Context/Context';

function App() {
    // Destructuring isOpen directly from ctx
    const isOpen  = useContext(Context);
    
    return (
        <div className="App">
          {console.log(isOpen)}
            <Sidebar isOpen={isOpen} />
            <MainHeader isOpen={isOpen} />
        </div>
    );
}

export default App;

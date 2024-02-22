import React, { useContext } from "react";
import { Context } from "./components/Context/Context";
import "./App.css";
import MainHeader from "./components/MainHeader";

function App({ isActive }) {
  const { isOpen } = useContext(Context);
  
  return (
    <div value= {isOpen}>
      {isActive && !isOpen ? (
        <div className="App">
          <MainHeader className="show" />
        </div>
      ) : (
        <div className="hide"></div>
      )}
    </div>
  );
}

export default App;

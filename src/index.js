
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextProvider from './components/Context/Context';
import App from './App';


//// 1) First call the useContext here so you can use and make a conditional ternary operator 
//2) Then create a css class that will do the same thing for other components as well

const Root = () => {
 
  
  return (
    <React.StrictMode>
      <ContextProvider>
          <App/>
      </ContextProvider>
     
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

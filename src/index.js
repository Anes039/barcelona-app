import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import {useContext} from 'react';
import {Context} from './components/Context/Context';


const Root = () => {
  const ctx = useContext(Context);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/barcelona-app" element={<App ctx={ctx} /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);

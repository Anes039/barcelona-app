import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import  ContextProvider  from './components/Context/Context';  // Assuming ContextProvider is defined
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}

const Root = () => {
  return (
    <React.StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);

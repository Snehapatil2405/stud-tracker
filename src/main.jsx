import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // 🟢 add this
import App from './App';
import './index.css';   // tailwind + global css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   {/* 🟢 wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

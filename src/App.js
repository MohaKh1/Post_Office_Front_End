import React from 'react';
import './App.css';
import {
  BrowserRouter
} from "react-router-dom";

import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </div>
  );
}

export default App;

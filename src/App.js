import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Login/>
      </Router>
    </div>
  );
}

export default App;

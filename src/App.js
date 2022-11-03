import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <SignIn/>
      </Router>
    </div>
  );
}

export default App;

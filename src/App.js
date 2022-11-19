import React from 'react';
import './App.css';
import {
 Routes, Route
} from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

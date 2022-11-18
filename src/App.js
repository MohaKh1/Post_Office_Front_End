import React from 'react';
import './App.css';
import {
 Routes, Route
} from "react-router-dom";
import Login from './Pages/UserAuth_Pages/Login';
import Employee from './Pages/Employee_Pages/Employee';
import SignUp from './Pages/UserAuth_Pages/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="employee_home" element={<Employee/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

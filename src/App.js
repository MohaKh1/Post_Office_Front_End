import React from 'react';
import './App.css';
import {
 Routes, Route
} from "react-router-dom";
import Login from './Pages/UserAuth_Pages/Login';
import Employee from './Pages/Employee_Pages/Employee';
import SignUp from './Pages/UserAuth_Pages/SignUp';
import Customer from './Pages/Customer_Pages/Customer';
import Customer_package_entry from './Pages/Customer_Pages/Customer_Package_Entry';
import Customer_profile from './Pages/Customer_Pages/Customer_ProfIle';
import Customer_package_status from './Pages/Customer_Pages/Customer_Package_Status';
import Employee_customer_reports from './Pages/Employee_Pages/Employee_Customer_Reports';
import Employee_processing from './Pages/Employee_Pages/Employee_Processing';
import Manager_employee_report from './Pages/Manager_Pages/Manager_Employee_Report';
import Manager_employee_entry from './Pages/Manager_Pages/Manager_Employee_Entry';
import Manager from './Pages/Manager_Pages/Manager';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
        <Route path="customer" element={<Customer/>}/>
          <Route path="customer_package_entry" element={<Customer_package_entry/>}/>
          <Route path="customer_package_status" element={<Customer_package_status/>}/>
          <Route path="customer_profile" element={<Customer_profile/>}/>
        <Route path="employee" element={<Employee/>}/>
          <Route path="employee_customer_reports" element={<Employee_customer_reports/>}/>
          <Route path="employee_processing" element={<Employee_processing/>}/>
        <Route path="Manager" element={<Manager/>}/>
          <Route path ="Manager_employee_report" element={<Manager_employee_report/>}/>
          <Route path ="Manager_employee_entry" element={<Manager_employee_entry/>}/>
          
          
      </Routes>
    </div>
  );
}

export default App;

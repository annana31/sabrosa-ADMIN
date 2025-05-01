import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminProfile from './pages/AdminProfile';
import EmployeeDetails from './pages/EmployeeDetails';
import AddEmployee from './pages/AddEmployee';
import AddProducts from './pages/AddProducts';
import AddBrands from './pages/AddBrands';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminProfile />} />
        <Route path="/employeeDetails" element={<EmployeeDetails />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        <Route path="/AddBrands" element={< AddBrands />} />
      </Routes>
    </Router>
  );
}

export default App;

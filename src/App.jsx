import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

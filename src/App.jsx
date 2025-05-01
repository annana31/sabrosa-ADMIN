import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminProfile from './pages/AdminProfile';
import AdminPerformance from './pages/AdminPerformance';
import AdminDashboard from './pages/AdminDashboard';
import AdminProjects from './pages/AdminProjects';
import AdminUsers from './pages/AdminUsers';
import AdminTasks from './pages/AdminTasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminProfile />} />
        <Route path="/dashboard" element={<AdminDashboardDashboard />} />
        <Route path="/performance" element={<AdminPerformance />} />
        <Route path="/projects" element={<AdminProjectsProjects />} />
        <Route path="/users" element={<AdminUsersUsers />} />
        <Route path="/tasks" element={<AdminTasksTasks />} />
      </Routes>
    </Router>
  );
}

export default App;

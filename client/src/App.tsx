// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// EmployeeManagement from './components/EmployeeManagement';
// Import other components as needed

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employees">Employee Management</Link>
            </li>
            {/* Add other navigation links as needed */}
          </ul>
        </nav>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the Car Wash Management System</h2>
      <p>Select an option from the menu to get started.</p>
    </div>
  );
};

export default App;

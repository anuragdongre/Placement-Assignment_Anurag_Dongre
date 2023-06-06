import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Login from "./componenets/Login";
import TaskDashboard from "./componenets/TaskDaskboard";
import TaskForm from "./componenets/TaskForm";

function App() {

  const [token, settoken] = useState(null);

  const handleLogin = (token) => {
    settoken(token);
  }
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Task Dashboard</Link>
          </li>
          <li>
            <Link to="/create-task">Create Task</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={!token ? <Navigate to="/" /> : <TaskDashboard token={token} />}
        />
        <Route
          path="/create-task"
          element={!token ? <Navigate to="/" /> : <TaskForm token={token} />}
        />
      </Routes>
    </div>
  </Router>
);
};
export default App;

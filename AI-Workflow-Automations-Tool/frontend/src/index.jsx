import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Theme initialization: respect saved preference, then system preference
try {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('night-mode');
  } else if (saved === 'light') {
    document.body.classList.remove('night-mode');
    document.documentElement.classList.add('light-mode');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('night-mode');
  }
} catch (e) {
  // ignore in non-browser environments
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/pipelines">Pipelines</Link>
      <Link to="/deployment">Deployment</Link>
      <Link to="/knowledge">Knowledge</Link>
    </nav>
    <App />
  </Router>
  // </React.StrictMode>
);

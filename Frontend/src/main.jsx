import React from 'react';
import { createRoot } from 'react-dom/client';

// Replace BrowserRouter with HashRouter
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
 
  <Router>
    <App />
  </Router>
);

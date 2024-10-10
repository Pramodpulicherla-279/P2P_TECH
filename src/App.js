import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
              
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import EnrollForm from './components/EnrollForm/EnrollForm';
import DetailsForm from './components/EnrollForm/DetailsForm';
import QualificationForm from './components/EnrollForm/QualificationForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enroll" element={<EnrollForm />} />
          <Route path="/enroll/details" element={<DetailsForm />} />
          <Route path="/enroll/qualification" element={<QualificationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
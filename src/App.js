// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import TeacherEnrollForm from './components/TeacherEnrollForm/TeacherEnrollForm';
import StudentEnrollForm from './components/StudentEnrollForm/StudentEnrollForm';
import DetailsForm from './components/TeacherEnrollForm/DetailsForm';
import QualificationForm from './components/TeacherEnrollForm/QualificationForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teacher-enroll" element={<TeacherEnrollForm />} />
          <Route path="/student-enroll" element={<StudentEnrollForm />} />

          <Route path="/enroll/details" element={<DetailsForm />} />
          <Route path="/enroll/qualification" element={<QualificationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
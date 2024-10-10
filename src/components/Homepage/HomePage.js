import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Events from '../Events/Events';
import './HomePage.css';

const HomePage = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setStudentCount(150); // Example count
      setTeacherCount(20);  // Example count
    }, 1000);
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <Sidebar />
      
        
        <main className="main-content">
          <div className="card">
            <h2>Students</h2>
            <p className="count">{studentCount}</p>
            <button id='enroll-btn'>Enroll</button>
            <button>More</button>
          </div>
          <div className="card">
            <h2>Teachers</h2>
            <p className="count">{teacherCount}</p>
            <button id='enroll-btn'>Enroll</button>
            <button>More</button>
          </div>
        </main>
        <Events />
      </div>
  );
};

export default HomePage;
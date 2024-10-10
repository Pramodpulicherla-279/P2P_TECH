import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Events from '../Events/Events';
import './HomePage.css';

const HomePage = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    const targetStudentCount = 150;
    const targetTeacherCount = 20;
    const duration = 1000; // Duration of the animation in milliseconds
    const interval = 10; // Interval in milliseconds

    const incrementStudent = targetStudentCount / (duration / interval);
    const incrementTeacher = targetTeacherCount / (duration / interval);

    const studentInterval = setInterval(() => {
      setStudentCount((prevCount) => {
        if (prevCount + incrementStudent >= targetStudentCount) {
          clearInterval(studentInterval);
          return targetStudentCount;
        }
        return prevCount + incrementStudent;
      });
    }, interval);

    const teacherInterval = setInterval(() => {
      setTeacherCount((prevCount) => {
        if (prevCount + incrementTeacher >= targetTeacherCount) {
          clearInterval(teacherInterval);
          return targetTeacherCount;
        }
        return prevCount + incrementTeacher;
      });
    }, interval);

    return () => {
      clearInterval(studentInterval);
      clearInterval(teacherInterval);
    };
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <div className="card">
          <h2>Students</h2>
          <p className="count">{Math.floor(studentCount)}</p>
          <button id='enroll-btn'>Enroll</button>
          <button>More</button>
        </div>
        <div className="card">
          <h2>Teachers</h2>
          <p className="count">{Math.floor(teacherCount)}</p>
          <button id='enroll-btn'>Enroll</button>
          <button>More</button>
        </div>
      </main>
      <Events />
    </div>
  );
};

export default HomePage;
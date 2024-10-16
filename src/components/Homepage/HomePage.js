import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Events from '../Events/Events';
import './HomePage.css';

const HomePage = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const navigate = useNavigate();

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

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  return (
    <div className="homepage">
      <Navbar />
      <Sidebar visibleItems={['home', 'studentFee', 'attendanceTracking', 'teacherLeaves', 'academicManagement', 'studentPerformance']} />
      <main className="main-content">
        <div className="card">
          <h2>Students</h2>
          <p className="count">{Math.floor(studentCount)}</p>
          <div className="button-group">
            <button id='enroll-btn'>Enroll</button>
            <button>More</button>
          </div>
        </div>
        <div className="card">
          <h2>Teachers</h2>
          <p className="count">{Math.floor(teacherCount)}</p>
          <div className="button-group">
            <button id='enroll-btn' onClick={handleEnrollClick}>Enroll</button>
            <button>More</button>
          </div>
        </div>
      </main>
      <Events />
    </div>
  );
};

export default HomePage;
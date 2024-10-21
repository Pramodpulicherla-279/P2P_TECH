import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Events from '../Events/Events';
import Cards from '../Cards/Cards';
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
      <Sidebar visibleItems={['home', 'attachDocument', 'subjectAllocation', 'attendanceTracking', 'leaveApprovals', 'academicPerformance','teacherAlert']} />
      <main className="main-content">
        <Cards studentCount={studentCount} teacherCount={teacherCount} />
      </main>
      <Events />
    </div>
  );
};

export default HomePage;
import React from 'react';
import './About.css';

const About = () => {
  const students = [
    { name: 'Michael Daza', year: 'Senior', major: 'Computer Science' },
    { name: 'Victor Prieto', year: 'Senior', major: 'Computer Science' },
    { name: 'Raja Pradhan', year: 'Senior', major: 'Computer Science' },
  ];

  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="students-container">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h2>{student.name}</h2>
            <p>Year: {student.year}</p>
            <p>Major: {student.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './About.css';

const About = () => {
  const students = [
    { name: 'Michael Daza', year: 'Senior', major: 'Computer Science', bio: 'Lorem ipsum dolor sit amet' },
    { name: 'Victor Prieto', year: 'Senior', major: 'Computer Science', bio: 'Lorem ipsum dolor sit amet' },
    { name: 'Raja Pradhan', year: 'Junior', major: 'Computer Science', bio: 'Lorem ipsum dolor sit amet' },
  ];

  const timelineEvents = [
    { week: 'Week 1', event: 'Project Kickoff' },
    { week: 'Week 2', event: 'Design Phase Completion' },
    { week: 'Week 3', event: 'Project Completed' },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </section>

      <section className="team-bios">
        <h2>Meet Our Team</h2>
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h3 className="student-name">{student.name}</h3>
            <p className="student-detail">Year: {student.year}</p>
            <p className="student-detail">Major: {student.major}</p>
            <p className="student-bio">{student.bio}</p>
          </div>
        ))}
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <span className="timeline-week">{event.week}</span>
              <span className="timeline-description">{event.event}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: team@example.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
    </div>
  );
};

export default About;

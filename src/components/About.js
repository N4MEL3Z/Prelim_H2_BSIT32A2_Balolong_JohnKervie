import React from "react";

const About = () => {
  return (
    <section id="About">
      <div className="about-container">
        <div className="school-panel">
          <h2>About</h2>
          <h3>Education:</h3>
          <div className="school-entry">
            <h3>Elementary School:</h3>
            <p>Bayanan Elementary School Main, [City, State]</p>
            <p>Years Attended: 2010 - 2015</p>
          </div>
          <div className="school-entry">
            <h3>Junior High School:</h3>
            <p>Mary Mother of God Parochial School, [City, State]</p>
            <p>Years Attended: 2015 - 2019</p>
          </div>
          <div className="school-entry">
            <h3>Senior High School:</h3>
            <p>
              Christ the King College of Science and Technology, [City, State]
            </p>
            <p>Years Attended: 2020 - 2022</p>
          </div>
          <div className="school-entry">
            <h3>College:</h3>
            <p>Lyceum of Alabang Inc., [City, State]</p>
            <p>
              Degree: Bachelor of Information Technology (Currently in 3rd Year)
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skill-list">
            <li>Photography</li>
            <li>Coding</li>
            <li>Cooking</li>
            <li>Drawing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

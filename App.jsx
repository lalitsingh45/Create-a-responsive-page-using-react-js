import React from "react";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="section1-container">
      <h1 className="section1-name">Lalit Singh (22BCE5039)</h1>
      <p className="section1-role">Student</p>
      <p className="section1-school">School of Computer Science</p>
      <p className="section1-institution">VIT Chennai, CHennai</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="section2-container">
      <ContactDetails />
      <Projects />
      <ResearchAreasOfInterest />
      <TechnicalSkillSet />
      <AboutMe />
      <EducationalQualification />
      <AwardsAndRecognition />
      <OtherInformation />
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="section2-contact-details">
      <h2>Contact Details</h2>
      <p>Email: abc@gmail.com</p>
      <p>Phone: +91 1234567890</p>
      <p>LinkedIn: asfdgd</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="section2-projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Disease detection using Pyhton</h3>
          
        </li>
        <li>
          <h3>Dog finding website</h3>
          
        </li>
      </ul>
    </div>
  );
}

function ResearchAreasOfInterest() {
  return (
    <div className="section2-research-areas">
      <h2>Research Areas of Interest</h2>
      <ul>
        <li>Web Development</li>
        <li><Design></Design></li>
      </ul>
    </div>
  );
}

function TechnicalSkillSet() {
  return (
    <div className="section2-technical-skills">
      <h2>Technical Skill Set</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="section2-about-me">
      <h2>About Me</h2>
      <p>
        I am student in Vit chennai. Computer Science. I am staying in Hostel. I
        am from Uttar Pradesh.
      </p>
    </div>
  );
}

function EducationalQualification() {
  return (
    <div className="section2-educational-qualification">
      <h2>Educational Qualification</h2>
      <ul>
        <li>
          <h3>Grade X</h3>
          <p>ABC School, 98%</p>
        </li>
        <li>
          <h3>Grade XII</h3>
          <p>XYZ School, 95%</p>
        </li>
        <li>
          <h3>BTech in Somputer Science</h3>
          <p>VIT Chennai, Chennai CGPA: 9.1</p>
        </li>
      </ul>
    </div>
  );
}

function AwardsAndRecognition() {
  return (
    <div className="section2-awards-recognition">
      <h2>Awards and Recognition</h2>
      <ul>
        <li>Award 1</li>
        <li>Award 2</li>
      </ul>
    </div>
  );
}

function OtherInformation() {
  return (
    <div className="section2-other-information">
      <h2>Other Information</h2>
      <p>sdkjfansdjfajskdfasdf</p>
    </div>
  );
}

export default Portfolio;

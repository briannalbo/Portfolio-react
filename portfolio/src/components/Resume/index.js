import React from 'react';
import '../../App.css'
import myresume from '../../assets/myresume.pdf';

function Resume() {
  return (
    <section>
      
      <p id='resume-download'>
        <a href={myresume}> Download My Resume</a>
        </p>
        <div id='resume'>
        <div id='front'>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        </div>
        <div id='back'>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
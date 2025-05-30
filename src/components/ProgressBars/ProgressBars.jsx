import React from 'react';
import './ProgressBars.css'; 

function ProgressBars() {
  const skills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 85 },
    { name: 'Javascript', percentage:70 },
    { name: 'React', percentage: 75},
  ];

  return (
    <div className="progress-container">
      {skills.map((skill, index) => (
        <div className="progress-item" key={index}>
          <span className="label">{skill.name}</span>
          <div className="bar">
            <div className="fill" style={{ width: `${skill.percentage}%` }}>
              <span className="value">{skill.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressBars;

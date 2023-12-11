import './App.css'

import React from 'react';

const App = () => {
  const course = {
    name: 'Full Stack application development',
    parts: [
      {
        name: 'Introduction to Full Stack',
        exercises: 8
      },
      {
        name: 'Backend with Node.js',
        exercises: 12
      },
      {
        name: 'Frontend with React',
        exercises: 15
      }
    ]
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part => (
          <li key={part.name}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>
      <p>Total exercises: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
    </div>
  );
};

export default App;

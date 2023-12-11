import './App.css'

import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <h1>{course}</h1>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name}: {part.exercises} exercises
        </p>
      ))}
      <p>Total exercises: {parts.reduce((total, part) => total + part.exercises, 0)}</p>
    </div>
  );
};

export default App;
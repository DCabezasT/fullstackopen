import './App.css'

import React from 'react';

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  const totalExercises = exercises1 + exercises2 + exercises3;
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};


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
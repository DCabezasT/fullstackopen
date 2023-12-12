
import './App.css'
import React, { useState } from 'react';

// Componente Button
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Componente StatisticLine
const StatisticLine = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);


const Statistics = ({ good, neutral, bad, allComents }) => {
  const totalScore = good - bad;


  if (allComents === 0) {
    return <p>No feedback given yet.</p>;
  }

  const calculateAverage = () => (allComents === 0 ? 0 : totalScore / allComents);
  const calculatePositivePercentage = () => (good / allComents) * 100;

  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={allComents} />
      <StatisticLine text="Average" value={calculateAverage().toFixed(2)} />
      <StatisticLine text="Positive" value={`${calculatePositivePercentage().toFixed(2)}%`} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const allComents = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <br />
      <br />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allComents={allComents} />
    </div>
  );
};

export default App;

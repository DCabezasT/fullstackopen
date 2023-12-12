
import './App.css'
import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, allComents }) => {
  const totalScore = good - bad;
  const calculateAverage = () => (allComents === 0 ? 0 : totalScore / allComents);
  const calculatePositivePercentage = () => (allComents === 0 ? 0 : (good / allComents) * 100);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {allComents}</p>
      <p>Average: {calculateAverage().toFixed(2)}</p>
      <p>Positive: {calculatePositivePercentage().toFixed(2)}%</p>
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
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <br />
      <br />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allComents={allComents} />
    </div>
  );
};

export default App;

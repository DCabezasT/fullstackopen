import './App.css'


import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistics = ({ good, neutral, bad, allComents, average,Positive }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {allComents}</p>
      <p>Average: {average}</p>
      <p>Positive: {Positive}</p>
    </div>
  );
};

const App = () => {
  const [allClicks, setAll] = useState([]);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allComents, setAllComents] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [Positice, setPositive] = useState(0);


  const handleGoodClick = () => {
    setAll(allClicks.concat('Good'));
    setGood(good + 1);
    updateAllComents();
  };

  const handleNeutralClick = () => {
    setAll(allClicks.concat('Neutral'));
    setNeutral(neutral + 1);
    updateAllComents();
  };

  const handleBadClick = () => {
    setAll(allClicks.concat('Bad'));
    setBad(bad + 1);
    updateAllComents();
  };

  const updateAllComents = () => {
    const total = good - bad;
    setTotalScore(total);
    setAllComents(good + neutral + bad + 1);
  };

  const calculateAverage = () => {
    if (allComents === 0) {
      return 0;
    }
    return totalScore / allComents;
  };

  const updatePositive = () => {
    if (allComents === 0) {
      return 0;
    }
    const positivePercentage = (good / allComents) * 100;
    return positivePercentage.toFixed(2);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <br />
      <br />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allComents={allComents}
        average={calculateAverage().toFixed(2)}
        Positive={updatePositive()}
      />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

// Componente Button
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Componente StatisticLine
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, allComents }) => {
  const totalScore = good - bad;

  const calculateAverage = () => (allComents === 0 ? 0 : totalScore / allComents);
  const calculatePositivePercentage = () => (good / allComents) * 100;

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={allComents} />
          <StatisticLine text="Average" value={calculateAverage().toFixed(2)} />
          <StatisticLine text="Positive" value={`${calculatePositivePercentage().toFixed(2)}%`} />
        </tbody>
      </table>
    </>
  );
};

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <h1>Anecdote</h1>
      <p>{anecdotes[selected]}</p>
      <Button
        handleClick={() => setSelected((selected + 1) % anecdotes.length)}
        text="Next Anecdote"
      />
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
      <table>
        <tbody>
          <tr>
            <td>
              <h1>Give Feedback</h1>
              <Button handleClick={handleGoodClick} text="Good" />
              <Button handleClick={handleNeutralClick} text="Neutral" />
              <Button handleClick={handleBadClick} text="Bad" />
            </td>
          </tr>
          <tr>
            <td>
              <Anecdotes />
            </td>
          </tr>
          {allComents > 0 && (
            <tr>
              <td>
                <Statistics good={good} neutral={neutral} bad={bad} allComents={allComents} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;

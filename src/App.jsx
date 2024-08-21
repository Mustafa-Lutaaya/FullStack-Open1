import { useState } from 'react';

const Statistics = ({ good, neutral, bad, totalFeedback, averageScore, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feeback: {totalFeedback}</p>
      <p>Average score: {averageScore.toFixed(1)}</p>
      <p>Positive feedback: {positivePercentage.toFixed(1)}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback > 0 ? (good - bad) / totalFeedback : 0;
  const positivePercentage = totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;
  
  return (
  <div>
    <h1>Give feeback</h1>
    <button onClick={() => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>


    <h2>Statistics</h2>
    {totalFeedback > 0 ? ( 
    <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    totalFeedback={totalFeedback}
    averageScore={averageScore}
    positivePercentage={positivePercentage}
    />
    ) : (
      <p>No feedback given</p>
    )}
    </div>
  );
};

export default App; 
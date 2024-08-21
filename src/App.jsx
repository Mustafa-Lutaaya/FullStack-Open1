import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const handleGoodClick = () => setGood(good + 1);
const handleNeutralClick = () => setNeutral(neutral + 1);
const handleBadClick = () => setBad(bad + 1);

const totalFeedback = good + neutral + bad;
const averageScore = totalFeedback > 0 ? (good - bad) / totalFeedback : 0;
const positivePercentage = totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;

return (
  <div>
    <h1>Give feeback</h1>
    <button onClick={handleGoodClick}>Good</button>
    <button onClick={handleNeutralClick}>Neutral</button>
    <button onClick={handleBadClick}>Bad</button>

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

export default App; 
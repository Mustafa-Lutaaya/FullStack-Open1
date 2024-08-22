import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return ( 
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, totalFeedback, averageScore, positivePercentage }) => {
  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }
  
  return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total feedback" value={totalFeedback} />
      <StatisticLine text="Average score" value={averageScore.toFixed(1)} />
      <StatisticLine text="Positive feeback" value={`${positivePercentage.toFixed(1)}%`} />
      </tbody>
    </table>
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
    <Button onClick={() => setGood(good + 1)} text="Good" />
    <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
    <Button onClick={() => setBad(bad + 1)} text="Bad" />


    <h2>Statistics</h2>
    <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    totalFeedback={totalFeedback}
    averageScore={averageScore}
    positivePercentage={positivePercentage}
    />
    </div>
  );
};

export default App; 
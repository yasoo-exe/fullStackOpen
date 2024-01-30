import { useState } from "react";

const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>;

const Statisticline = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  return good + neutral + bad > 0 ? (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statisticline value={good} text="good" />
          <Statisticline value={neutral} text="neutral" />
          <Statisticline value={bad} text="bad" />
          <Statisticline value={good + neutral + bad} text="total" />
          <Statisticline
            value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
            text="average"
          />
          <Statisticline
            value={(good / (good + neutral + bad)) * 100}
            text="positive"
          />
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onSmash={addGood} text="good" />
        <Button onSmash={addNeutral} text="neutral" />
        <Button onSmash={addBad} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;

// src/DecreaseCounter.jsx
const DecreaseCounter = ({ onDecrease }) => {
  // Exercise 5: Passing '1' as a parameter back to the parent
  return <button onClick={() => onDecrease(1)}>Decrease by 1</button>;
};

export default DecreaseCounter;
// src/ResetCounter.jsx
const ResetCounter = ({ onReset }) => {
  // When clicked, it calls the function the parent gave it
  return <button onClick={onReset}>Reset to 0</button>;
};

export default ResetCounter;
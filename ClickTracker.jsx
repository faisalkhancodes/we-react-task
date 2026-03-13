// src/ClickTracker.jsx
import { useState } from 'react';
import ResetCounter from './ResetCounter';
import DecreaseCounter from './DecreaseCounter';

const ClickTracker = () => {
  // State to keep track of the number
  const [count, setCount] = useState(0);

  // Logic for increasing
  const increment = () => setCount(count + 1);

  // Logic for resetting (passed to ResetCounter)
  const reset = () => setCount(0);

  // Logic for decreasing (passed to DecreaseCounter)
  // 'amount' comes from the child parameter
  const decrease = (amount) => setCount(count - amount);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Clicks: {count}</h1>
      <button onClick={increment}>Click to Increase</button>
      
      <div style={{ marginTop: '10px' }}>
        {/* Passing the functions as props to children */}
        <ResetCounter onReset={reset} />
        <DecreaseCounter onDecrease={decrease} />
      </div>
    </div>
  );
};

export default ClickTracker;
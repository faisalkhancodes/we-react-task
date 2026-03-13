// src/App.jsx
import Teacher from './Teacher';
import ClickTracker from './ClickTracker';

function App() {
  return (
    <div>
      {/* Step 1: Using the Teacher component with props */}
      <Teacher name="Mr. Smith" subject="React Development" />
      
      <hr />

      {/* Step 2-5: The state-based tracker system */}
      <ClickTracker />
    </div>
  );
}

export default App;
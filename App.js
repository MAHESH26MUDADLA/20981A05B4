import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(15); // Default limit for numbers

  const genum = (limit) => {
    return Array.from({ length: limit }, (_, index) => index + 1);
  };

  const fetchNumbers = () => {
    setLoading(true);
    // Simulate an API call with setTimeout
    setTimeout(() => {
      const numbers = genum(limit);
      const jsonData = JSON.stringify({ numbers });
      setData(jsonData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>JSON Output</h1>
      <label>
        Limit: 
        <input 
          type="number" 
          value={limit} 
          onChange={e => setLimit(e.target.value)}
        />
      </label>
      <button onClick={fetchNumbers}>Generate JSON</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{data}</pre>
      )}
    </div>
  );
}

export default App;

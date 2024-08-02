// src/App.js
import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
  const [response, setResponse] = useState(null);

  return (
    <div className="App">
      <h1>ABCD123</h1> {/* Replace with your roll number */}
      <JsonInput setResponse={setResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
};

export default App;

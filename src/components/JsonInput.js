// src/components/JsonInput.js
import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponse }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonInput = JSON.parse(input);
      const response = await axios.post('http://127.0.0.1:5000/bfhl', jsonInput);
      setResponse(response.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON or server error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default JsonInput;

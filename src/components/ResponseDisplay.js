// src/components/ResponseDisplay.js
import React, { useState } from 'react';

const ResponseDisplay = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(value);
  };

  return (
    <div>
      <select multiple onChange={handleChange}>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_alphabet">Highest Alphabet</option>
      </select>
      <div>
        {selectedOptions.includes('alphabets') && (
          <div>
            <h3>Alphabets</h3>
            <p>{response.alphabets.join(', ')}</p>
          </div>
        )}
        {selectedOptions.includes('numbers') && (
          <div>
            <h3>Numbers</h3>
            <p>{response.numbers.join(', ')}</p>
          </div>
        )}
        {selectedOptions.includes('highest_alphabet') && (
          <div>
            <h3>Highest Alphabet</h3>
            <p>{response.highest_alphabet.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;

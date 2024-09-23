'use client';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* <h2>Current Server Time: {serverTime}</h2> */}
      <h1>Enter Something</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here"
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <br />
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [secret, setSecret] = useState('');
  const [status, setStatus] = useState(null);

  const handleButtonClick = async (e) => {

    e.preventDefault();
    
    alert(`You entered: ${secret}`);
    const response = await fetch('/api/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ secret }),
    });

    const result = await response.json();
    setStatus(result);
    setSecret('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Enter Something</h1>
      <input
        type="text"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="Type here"
        style={{ padding: '10px', width: '300px', marginBottom: '20px', color:'black' }}
        required
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
      {status && (
        <div>
          {status.success ? (
            <p style={{ color: 'green' }}>{status.message}</p>
          ) : (
            <p style={{ color: 'red' }}>{status.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

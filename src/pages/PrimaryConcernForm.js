import React, { useState } from 'react';
import Button from '../components/Button';

function PrimaryConcernForm({ onSubmit }) {
  const [primaryConcern, setPrimaryConcern] = useState('');

  const token = localStorage.getItem('authToken');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/primary-concerns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include the Authorization header with the token
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ primaryConcern }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create primary concern');
        }
        return response.json();
      })
      .then(data => {
        console.log('Primary Concern created:', primaryConcern);
      })
      .catch((error) => {
        console.error('Error creating primary concern:', error);
      });
    
    setPrimaryConcern('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Primary Concern:
        <input
          type="text"
          value={primaryConcern}
          onChange={(event) => setPrimaryConcern(event.target.value)}
        />
      </label>
      <Button text="Submit" type="submit" />
    </form>
  );
}

export default PrimaryConcernForm;

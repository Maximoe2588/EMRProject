import React, { useState } from 'react';

function PrimaryConcernForm({ onSubmit }) {
  const [primaryConcern, setPrimaryConcern] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(primaryConcern);
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default PrimaryConcernForm;

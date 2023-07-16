// src/pages/Dashboard.js
import React from 'react';
import PrimaryConcernForm from './PrimaryConcernForm';

function Dashboard() {

  const handlePrimaryConcernSubmit = async (primaryConcern) => {
    try {
      const response = await fetch('http://localhost:3000/api/primary-concerns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ primaryConcern }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create primary concern');
      }
  
      
      console.log('Primary Concern created:', primaryConcern);
    } catch (error) {
      console.error('Error creating primary concern:', error);
    }
  };
  

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <div>Your Profile Overview</div>
      <div>Your Activities</div>
      <div>Your Notifications</div>
      <PrimaryConcernForm onSubmit={handlePrimaryConcernSubmit} />
    </div>
  );
}

export default Dashboard;

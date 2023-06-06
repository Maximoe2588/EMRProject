import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function SymptomForm() {
  const [formData, setFormData] = useState({
    symptomDescription: '',
    symptomLocation: '',
    symptomIntensity: '',
    symptomOccurrence: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here.
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Describe your symptom"
        type="text"
        name="symptomDescription"
        value={formData.symptomDescription}
        onChange={handleChange}
      />
      <Input
        label="Where does it occur?"
        type="text"
        name="symptomLocation"
        value={formData.symptomLocation}
        onChange={handleChange}
      />
      <Input
        label="How intense is it (1-10)?"
        type="number"
        name="symptomIntensity"
        min="1"
        max="10"
        value={formData.symptomIntensity}
        onChange={handleChange}
      />
      <Input
        label="What time of day does it occur?"
        type="text"
        name="symptomOccurrence"
        value={formData.symptomOccurrence}
        onChange={handleChange}
      />
      <Button text="Submit" type="submit" />
    </form>
  );
}

export default SymptomForm;

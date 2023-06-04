import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function DemographicsForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    phoneNumber: '',
    email: ''
  });


  const [isEditing, setIsEditing] = useState(true);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <Input
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button text="Submit" type="submit" />
        </form>
      ) : (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Date of Birth: {formData.dob}</p>
          <p>Address: {formData.address}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Email: {formData.email}</p>
          <Button text="Edit" onClick={handleEdit} />
        </div>
      )}
    </div>
  );
}

export default DemographicsForm;
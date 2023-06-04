import React from 'react';

function Input({ label, type, name, value, onChange, ...props }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;

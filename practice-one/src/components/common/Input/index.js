import React from 'react';
import './index.css';

const Input = ({
  type = 'text',
  placeholder = '',
  className = '',
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

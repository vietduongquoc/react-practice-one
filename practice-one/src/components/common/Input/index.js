import React from 'react';
import './index.css';

const Input = ({
  type = 'text',
  placeholder = '',
  className = '',
  value,
  onChange,
  id,
  ...props
}) => {
  if (type === 'checkbox') {
    return (
      <input
        type={type}
        className={`input ${className}`}
        checked={value}
        onChange={onChange}
        id={id}
        {...props}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;

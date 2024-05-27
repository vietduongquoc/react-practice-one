// src/components/common/input/index.js
import React from 'react';
import './index.css';

const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default Input;

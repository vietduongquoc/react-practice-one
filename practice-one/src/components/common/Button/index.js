import React from 'react';
import './index.css';

const Button = ({
  type = 'button',
  className = '',
  onClick,
  isDisabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      className={`btn ${className} ${isDisabled ? 'btn-disabled' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import './index.css';

const Button = ({
  type = 'button',
  className = '',
  onClick,
  isDisabled = false,
  label = '',
  icon = null,
}) => {
  return (
    <button
      type={type}
      className={`btn ${className} ${isDisabled ? 'btn-disabled' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;

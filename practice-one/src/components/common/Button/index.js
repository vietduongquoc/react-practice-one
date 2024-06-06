import React from 'react';
import './index.css';

const Button = (props) => {
  const { 
    type = 'button',
    className = '',
    onClick,
    isDisabled = false,
    label = '',
    icon = null } = props
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

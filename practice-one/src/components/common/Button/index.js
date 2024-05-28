import React from 'react';
import './index.css';

const Button = ({
  color,
  type,
  className,
  borderRadius = 'md',
  size = 'lg',
  variant = 'solid',
  isDisabled = false,
  children = '',
  onClick,
}) => {
  const variantClass = `btn-${variant}`;
  const btnSizeClass = `btn${borderRadius === 'full' ? '-circle' : ''}-size-${size}`;
  const borderClass = `rounded-${borderRadius}`;
  const btnColor = `btn-${color}`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${variantClass} ${btnSizeClass} ${borderClass} ${btnColor} ${className}`}
      disabled={isDisabled}
    >
      <div className="btn-content">{children}</div>
    </button>
  );
};

export default Button;

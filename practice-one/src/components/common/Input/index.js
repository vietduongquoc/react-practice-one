import React, { memo } from 'react';
import './index.css';

const Input = (props) => {
  const { 
    type = 'text',
    placeholder = '',
    className = '',
    value,
    onChange, } = props;
  return (
    <>
      {/* {props.age.scholl} */}
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default memo(Input);

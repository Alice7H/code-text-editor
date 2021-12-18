import React from 'react'
import './Input.css';

export default function Input({id, type, value, onChange,placeholder }) {
  return (
    <input type={type || 'text' }
    className="input" 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    id={id}
    />
  )
}

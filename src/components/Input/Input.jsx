import React from 'react'
import './Input.css';

export default function Input({onKeyDown, id, type, value, onChange,placeholder }) {
  return (
    <input type={type || 'text' }
    className="input" 
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    id={id}
    />
  )
}

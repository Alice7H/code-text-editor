import React from 'react'
import './Input.css';

export default function Input(props) {
  return (
    <input type={props?.type || 'text' }
    className="input" 
    value={props?.value}
    onChange={props?.onChange}
    placeholder={props?.placeholder}/>
  )
}

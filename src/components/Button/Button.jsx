import React from 'react'
import './Button.css';

export default function Button({style, type, className,onClick, children, role, id, ariaLabel }) {
  return (
    <button className={className} onClick={onClick} type={type} 
    aria-label={ariaLabel} role={role} id={id} style={style}>
      {children}
    </button>
  )
}

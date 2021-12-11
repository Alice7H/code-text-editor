import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import CollapseMenu from '../CollapseMenu';
import User from '../User';
import './Profile.css';

export default function Profile() {
  const [width] = useWindowSize();

  return (
    <div className="profile">
      {  width <= 768
       ? <CollapseMenu/>
       : <User/>
      }
    </div>
  )
}

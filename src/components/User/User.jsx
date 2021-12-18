import React from 'react'
import UserImage from '../../assets/images/totoro.jpg';
import Button from '../Button';

export default function User({className}) {

  return (
    <Button className={className ? className : "button-user"}>
      <img src={UserImage} alt="Usuário"/>
      Alice
    </Button>
  )
}

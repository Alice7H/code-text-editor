import React from 'react'
import { useNavigate } from 'react-router-dom';
import RemoveImg from '../../assets/images/remove.svg';
import Button from '../Button';
import './NotFound.css';

export default function NotFound() {
  const navigation = useNavigate();

  function handleBackToHome() {
    navigation('/');
  }
  return (
    <div className="not-found">
       <img src={RemoveImg} alt="Not found" />
        <h2>404</h2>
        <h3>Página não encontrada</h3>
        <Button type="button" className="button-outlined" 
        onClick={handleBackToHome}>Voltar para o início</Button>
    </div>
  )
}

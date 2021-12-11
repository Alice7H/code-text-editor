import React, { useState } from 'react'
import BoxCodeEditor from '../BoxCodeEditor';
import User from '../Profile/User';
import Button from '../Button';
import Comment from '../../assets/images/comments.svg';
import Favorite from '../../assets/images/favorite.svg';
import './Card.css';

export default function Card() {
  const [hide, setHide] = useState(true);

  function handleMouseOver(){
    setHide(false);
  }
  
  function handleMouseOut(){
    setHide(true);
  }

  return (
    <section className="card" 
    onMouseOver={ handleMouseOver }
    onMouseOut={ handleMouseOut } >   
      <BoxCodeEditor/>
      <div className="card-body">
        <h2>Título do projeto</h2>
        <p>Essa é a descrição do meu projeto</p>  
        
      { !hide &&   
        <div className="card-buttons">
          <div className="left">
            <Button buttonType="button-project">
              <img src={Comment} alt="Comentários" />
              1
            </Button>
            <Button buttonType="button-project">
              <img src={Favorite} alt="Favoritos" />
              3
            </Button>
          </div>
          <div className="right">
            <User/>
          </div>
        </div>
      }
      </div>
    </section>
  )
}

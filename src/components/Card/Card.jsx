import React, { useState } from 'react'
import Highlight from 'react-highlight';
import BoxCodeEditor from '../BoxCodeEditor';
import User from '../User';
import Button from '../Button';
import Comment from '../../assets/images/comments.svg';
import { ReactComponent as Favorite} from '../../assets/images/favorite.svg';
import './Card.css';

export default function Card(props) {
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [counterFavorite, setCounterFavorite] = useState(0);
  const project = props.project;

  function handleEditProject(){
    alert(props.project.id);
  }

  function handleComment(e) {
    e.stopPropagation();
    alert('botão comentário clicado');
    // abre caixa de popup para inserir comentário ?
    // redireciona para outra página para fazer comentário ?
  }

  function handleFavorite(e){
    e.stopPropagation();
    setToggleFavorite(!toggleFavorite);
    !toggleFavorite && setCounterFavorite(counter => counter + 1)
    toggleFavorite && setCounterFavorite(counter => counter - 1);
  }

  function handleShowProfile(e){
    e.stopPropagation();
    alert('botão autor do projeto clicado');
  }

  return (
    <div className="card" role="banner">   
      <BoxCodeEditor color={project.color}>
        <Highlight className={`language-${project.language}`} aria-label="Texto com highlight" >
          {project.code}
        </Highlight>
      </BoxCodeEditor>
      <div className="card-body" onClick={ handleEditProject } >
        <h2>{project.name}</h2>
        <p>{project.description}</p>  
        
        <div className="card-buttons" aria-haspopup="true">
          <div className="left">
            <Button className="button-project" onClick={handleComment} 
              ariaLabel="Adicionar comentário" role="button">
              <img src={Comment} alt=""/>
              0
            </Button>
            <Button className="button-project" onClick={handleFavorite} 
              ariaLabel="Favoritar" role="button">
              <Favorite alt="" 
              className={!toggleFavorite ? 'icon-favorite' : 'icon-favorite icon-favorite__active'}/>
              { counterFavorite }
            </Button>
          </div>
          <div className="right" onClick={handleShowProfile}>
            <User className="button-user__small"/>
          </div>
        </div>
      </div>
    </div>
  )
}

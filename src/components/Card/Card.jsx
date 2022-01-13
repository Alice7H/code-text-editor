import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommentContext } from '../../contexts/CommentContext';
import Highlight from 'react-highlight';
import User from '../User';
import Button from '../Button';
import BoxCodeEditor from '../BoxCodeEditor';
import { ReactComponent as Favorite} from '../../assets/images/favorite.svg';
import Comment from '../../assets/images/comments.svg';
import './Card.css';

export default function Card(props) {
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [counterFavorite, setCounterFavorite] = useState(0);
  const navigation = useNavigate();
  const { filterComments } = useContext(CommentContext);
  const project = props.project;
  const comments = filterComments(parseInt(project.id));
  
  const handleEditProject = () => navigation(`/${project.id}`)

  const handleComment = (e) => {
    e.stopPropagation();
    navigation(`/comment/${project.id}`);
  }

  const handleFavorite = (e) => {
    e.stopPropagation();
    setToggleFavorite(!toggleFavorite);
    !toggleFavorite && setCounterFavorite(counter => counter + 1);
    toggleFavorite && setCounterFavorite(counter => counter - 1);
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
              {comments.length || 0}
            </Button>
            <Button className="button-project" onClick={handleFavorite} 
              ariaLabel="Favoritar" role="button">
              <Favorite alt="" 
              className={!toggleFavorite ? 'icon-favorite' : 'icon-favorite icon-favorite__active'}/>
              { counterFavorite }
            </Button>
          </div>
          <div className="right">
            <User className="button-user__small"/>
          </div>
        </div>
      </div>
    </div>
  )
}

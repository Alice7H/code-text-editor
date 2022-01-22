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
  const { data } = props;
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [counterFavorite, setCounterFavorite] = useState(0);
  const navigation = useNavigate();
  const { filterComments } = useContext(CommentContext);
  const comments = filterComments(parseInt(data.id));
  
  const handleEditProject = () => navigation(`/${data.id}`)

  const handleComment = (e) => {
    e.stopPropagation();
    navigation(`/comment/${data.id}`);
  }

  const handleFavorite = (e) => {
    e.stopPropagation();
    setToggleFavorite(!toggleFavorite);
    !toggleFavorite && setCounterFavorite(counter => counter + 1);
    toggleFavorite && setCounterFavorite(counter => counter - 1);
  }

  return (
    <div className="card" role="banner">   
      <BoxCodeEditor color={data.color}>
        <Highlight className={`language-${data.language}`} aria-label="Texto com highlight" >
          {data.code}
        </Highlight>
      </BoxCodeEditor>
      <div className="card-body" onClick={ handleEditProject } >
        <h2>{data.name}</h2>
        <p>{data.description}</p>  
        
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

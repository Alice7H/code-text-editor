import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CommentContext } from '../../contexts/CommentContext';
import User from '../User';
import './CommentList.css';

export default function CommentList() {
  const { id } = useParams();
  const { filterComments } = useContext(CommentContext);
  const filtered = filterComments(parseInt(id));
  
  return (
    <div className="comment-container">
      <h2>Comentários</h2>
      <ul className="comment-list">
        { 
          filtered.length > 0 
         ? filtered.map( c => {
            return (
             <li key={c.id} className="comment-item">
                <div className="comment-right">
                  <User className="button-user__small"/>
                </div>
                "{c.comment}"
              </li>
            )
         })
        : <p>Não existe comentários neste projeto</p>
      }
      </ul>
    </div>
  )
}

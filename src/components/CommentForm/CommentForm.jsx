import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CommentContext } from '../../contexts/CommentContext';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../Button';
import './CommentForm.css';

export default function CommentForm() {
  const [comment, setComment] = useState();
  const { id } = useParams();
  const uid = parseInt(id);
  const { handleCreateComment } = useContext(CommentContext);
  
  const handleChangeComment = (e) => setComment(e.target.value)

  const handleSaveComment = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(comment){ 
      const cmt = { 
        id: Date.now(), 
        projectId: parseInt(uid),
        author: 'Alice7H',
        comment, 
      }
      handleCreateComment(cmt);
      setComment("");
    }else {
      toast.warn('Informe o campo corretamente');
    }
  }

  return (
    <div className="comment-container">
       <form onSubmit={handleSaveComment} className="comment-form">
        <ToastContainer autoClose="5000"/>
        <label htmlFor="comment" className="screenReader-only">
          Informe o comentário
        </label>
        <textarea className="input" name="comment" 
         id="comment" cols="30" rows="120"
         placeholder="Informe o comentário"
         onChange={handleChangeComment}
         value={comment}
        />
        <Button type="submit" className="button-filled">Enviar</Button>
       </form>
    </div>
  )
}

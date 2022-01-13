import { useNavigate, useParams, Navigate } from 'react-router-dom';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import Button from '../Button';
import './CommentBox.css';

export default function CommentBox() {
  const { id } = useParams();
  const navigation = useNavigate();
  const prj = JSON.parse(localStorage.getItem('projects')) || [];
  const validPrj = prj?.filter(project => project.id === parseInt(id));
  
  const backCommunity = () => navigation('/community')
 
  return (
    <div>
      { validPrj.length === 0 && <Navigate to={`/not-found`}/>}
      <CommentForm/>
      <CommentList/> 
      <div className="comment-container">
        <Button onClick={backCommunity} className="button-outlined">
          Voltar para a página de comunidade
        </Button>
      </div>
    </div> 
  )
}

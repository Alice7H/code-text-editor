import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CommentContext = createContext();

export default function CommentProvider(props) {
  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments'))|| []);
 
  const filterComments = (uid) => {
    return comments?.filter( c => c.projectId === uid) || [];
  }

  const handleCreateComment = (cmt) => {
    setComments([...comments, cmt]);
    const tempComments = JSON.parse(localStorage.getItem('comments')) || []; 
    tempComments.push(cmt); 
    localStorage.setItem('comments', JSON.stringify(tempComments));   
    toast.success('Comentário adicionado com sucesso.');
  }

  return (
    <CommentContext.Provider value={{
      handleCreateComment,
      filterComments
    }}>
      {props.children}
    </CommentContext.Provider>
  );
}

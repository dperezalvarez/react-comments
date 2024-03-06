import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="App">
      <h1>Deja tu Comentario</h1>
      <CommentForm onCommentSubmit={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;

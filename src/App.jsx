import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
//TODO---------
  );
}

export default App;

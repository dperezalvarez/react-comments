import React from 'react';

function CommentList({ comments }) {
  return (
    <div>
      <h2>Comentarios</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.author}</strong>: {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;

import React, { useState } from 'react';

function CommentForm({ onCommentSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit({ author, content });
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Tu nombre"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Tu comentario"
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CommentForm;

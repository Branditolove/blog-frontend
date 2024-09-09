import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md"> {/* Contenedor con estilo */}
      <div>
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Título
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
          required
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">
          Contenido
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
          rows="5"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
        Crear Entrada
      </button>
    </form>
  );
};

export default PostForm;
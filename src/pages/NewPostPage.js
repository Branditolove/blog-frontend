import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import PostForm from '../components/PostForm';

const NewPostPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (postData) => {
    try {
      await createPost(postData);
      navigate('/');
    } catch (error) {
      console.error('Failed to create post:', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="container mx-auto px-4 py-8"> {/* Añade padding vertical */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"> {/* Contenedor con estilo */}
        <h1 className="text-3xl font-bold mb-6 text-center">Crear Nuevo Post</h1>
        <PostForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NewPostPage;
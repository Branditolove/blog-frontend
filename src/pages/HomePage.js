import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostList from '../components/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null); // Definimos el estado para el error

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setError(err); // Asignamos el error al estado
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8"> 
      <h1 className="text-3xl font-bold mb-6 text-center"> 
        Entradas Recientes
      </h1>
      <PostList posts={posts} />

      {/* Mensaje de carga o error */}
      {!posts.length && !error && (
        <p className="text-center text-gray-500 mt-4">Cargando entradas...</p>
      )}
      {error && (
        <p className="text-center text-red-500 mt-4">Error al cargar las entradas. Por favor, inténtalo de nuevo más tarde.</p>
      )}
    </div>
  );
};

export default HomePage;
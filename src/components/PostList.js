import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"> 
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-lg rounded-lg p-6"> {/* Eliminamos la imagen y ajustamos el padding */}
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p> 
            <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline font-medium">
              Leer más
            </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api'; // Asegúrate de que la ruta a tu archivo api.js sea correcta

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Las contraseñas no coinciden');
      return; 
    }

    try {
      const userData = { 
        email: email, 
        password: password, 
        password_confirmation: passwordConfirmation 
      };
      await register(userData);
      navigate('/login'); 
    } catch (err) {
      console.error('Error al registrarse:', err);
      setError(err.response?.data?.error || 'Ocurrió un error durante el registro'); // Mostrar mensaje de error del backend o uno genérico
    }
  };

  return (
    <div className="container mx-auto px-4 py-8"> 
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"> 
        <h1 className="text-3xl font-bold mb-6 text-center">Registrarse</h1>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>} {/* Mostrar mensaje de error si existe */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label> 
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" 
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label> 
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" 
              required
            />
          </div>
          <div> 
            <label htmlFor="passwordConfirmation" className="block text-gray-700 font-medium mb-2">Confirmar Contraseña</label>
            <input
              type="password"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" 
              required
            />
          </div>

          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
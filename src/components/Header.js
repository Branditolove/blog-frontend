import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-blue-900 text-white shadow-md"> {/* Fondo azul oscuro y sombra sutil */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center"> {/* Alineación y espaciado */}
        <Link to="/" className="text-2xl font-semibold"> {/* Enlace principal más grande y llamativo */}
          Blog App
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/new-post" className="hover:text-blue-300 transition duration-300"> {/* Transición suave al pasar el ratón */}
                Nueva Entrada
              </Link>
              <button onClick={handleLogout} className="hover:text-blue-300 transition duration-300">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-300 transition duration-300">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="hover:text-blue-300 transition duration-300">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
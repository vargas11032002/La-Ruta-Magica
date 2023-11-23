// Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token almacenado (si lo estás utilizando)
    localStorage.removeItem('token');

    // Actualizar el estado de autenticación
    if (typeof setAuthenticated === 'function') {
      setAuthenticated(false);
    }

    // Redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
}

export default Logout;

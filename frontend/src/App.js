import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Store from './pages/Store';
import Productos from './pages/productos';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Register from './components/Register';
import Login from './components/Login';

function AuthenticatedLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function CenteredLayout({ children }) {
  return <div style={centerContentStyle}>{children}</div>;
}

const centerContentStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Nuevo componente PrivateRoute
const PrivateRoute = ({ element, authenticated }) => {
  return authenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CenteredLayout>
                <Register />
              </CenteredLayout>
            }
          />
          <Route
            path="/login"
            element={
              <CenteredLayout>
                <Login setAuthenticated={setAuthenticated} />
              </CenteredLayout>
            }
          />
          {/* Rutas privadas */}
          <Route
            path="/home"
            element={
              <PrivateRoute
                element={<AuthenticatedLayout><Home /></AuthenticatedLayout>}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/productos"
            element={
              <PrivateRoute
                element={<AuthenticatedLayout><Productos /></AuthenticatedLayout>}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/store"
            element={
              <PrivateRoute
                element={<AuthenticatedLayout><Store /></AuthenticatedLayout>}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/success"
            element={
              <PrivateRoute
                element={<AuthenticatedLayout><Success /></AuthenticatedLayout>}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/cancel"
            element={
              <PrivateRoute
                element={<AuthenticatedLayout><Cancel /></AuthenticatedLayout>}
                authenticated={authenticated}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

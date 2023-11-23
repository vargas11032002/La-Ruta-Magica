// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Store from "./pages/Store";
import Productos from "./pages/productos";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Register from "./components/Register";
import Login from "./components/Login";

function AuthenticatedLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function CenteredLayout({ children }) {
  return (
    <div style={centerContentStyle}>
      {children}
    </div>
  );
}

function App() {
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
                <Login />
              </CenteredLayout>
            }
          />
          <Route
            path="/home"
            element={<AuthenticatedLayout><Home /></AuthenticatedLayout>}
          />
          <Route
            path="/productos"
            element={<AuthenticatedLayout><Productos /></AuthenticatedLayout>}
          />
          <Route
            path="/store"
            element={<AuthenticatedLayout><Store /></AuthenticatedLayout>}
          />
          <Route path="/success" element={<AuthenticatedLayout><Success /></AuthenticatedLayout>} />
          <Route path="/cancel" element={<AuthenticatedLayout><Cancel /></AuthenticatedLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const centerContentStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default App;

// Navbar.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../Cart';
import CartProduct from '../components/CartProduct';
import Logout from './Logout'; // Importa el componente Logout
import './nav.css';

function Navbar({ setAuthenticated }) {
  const cart = useContext(Cart);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const navigate = useNavigate();

  const checkout = async () => {
   
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navegador">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Ruta Magica Del Cafe Del Huila
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Store">
                Lugares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/productos">
                Productos
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Carrito de ({productsCount}) compras
            </button>

            <Logout setAuthenticated={setAuthenticated} />

            <div
              className="modal fade"
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-dark text-white">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Carrito de compras
                    </h1>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {productsCount > 0 ? (
                      <div>
                        {cart.items.map((product, index) => (
                          <CartProduct
                            id={product.id}
                            quantity={product.quantity}
                            key={index}
                          />
                        ))}

                        <h4>
                          Total: $ {cart
                            .getTotal()
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")
                            .replace(/,00/, "")}
                        </h4>
                      </div>
                    ) : (
                      <h4 className="text-danger">El carrito está vacío</h4>
                    )}
                  </div>
                  <div className="modal-footer">
                    {productsCount > 0 ? (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={checkout}
                      >
                        Comprar
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import Map from "../components/map";
import Carrucel from "../components/carrusel";
import "./home.css"


function Home() {
  return (
    
    <div className="container" id="todo">
      <div className="row">
        <div className="col-12 col-md-6" id="textoo">
          <h1 className="mt-4">Ruta Mágica Del Café Del Huila</h1>
          
          <div className="col-10 " id="carrucel">
          <h4>colaboradores</h4>
            <Carrucel />
          </div>
          
          <h3>Misión</h3>
          <p className="mt-4">
            <span>
            La Ruta Mágica del Café del Huila tiene como misión promover el turismo sostenible y el desarrollo económico de la región a través del agroturismo, visibilizando la calidad del café que se produce en el departamento y ofreciendo experiencias únicas alrededor de la cultura cafetera.
            </span>
          </p>
          <h3>Visión</h3>
          <p>
            <span>
            La Ruta Mágica del Café del Huila busca consolidarse como un destino turístico de alto nivel a nivel nacional e internacional, reconocido por la calidad de su café y por ofrecer experiencias integrales alrededor de la cultura cafetera, en armonía con el medio ambiente y generando desarrollo económico sostenible para la región.
            </span>
          </p>
        </div>
        <div className="col-12 col-md-6 text-center" id="map" style={{ maxHeight: "700px" ,marginTop:"70px"}}>
  <Map className="img-fluid" alt="Map" style={{ height: "100%" }} />
</div>

      </div>
    </div>
  );
}

export default Home;

import PrecioNavbar from "../Components/PreciosNavBar/PreciosNavBar";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import FilterNav from "../Components/Navbar/Navbar";
import SeguroCalculator from "../Components/CalcularSeguro/CalcularSeguro";
import KilometrosCalculator from "../Components/CalcularKilometros/CalcularKilometros";
import Cart from "../Components/Cart/Cart";
import { useState } from "react";
import "../styles/Dashboard.css";

const DashBoard = () => {
  const [filtro, setFiltro] = useState("Todos");


  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/"; // vuelve al login
  };

  return (
    <div className="dashboard-container grid grid-cols-6 gap-4">
      <button className="logout-btn" onClick={cerrarSesion}>
        Cerrar sesión
      </button>

      {/* FILTRO CENTRADO ARRIBA */}
      <div className="col-span-5 col-start-2 mr-4 filter-container">
        <h1 className="dashboard-title">
          Simulador de Compras • Concesionario Sport
        </h1>
        <FilterNav onFilter={setFiltro} />
      </div>

      {/* AUTOS A LA IZQUIERDA */}
      <div className="col-start-1 col-end-6 ml-1 autos-container">
        <ItemListContainer filtro={filtro} />
      </div>

      {/* COLUMNA DERECHA */}
      <div className="col-start-6 col-end-18 right-column gap-4">
        <div className="widget-box">
          <PrecioNavbar />
        </div>

        <div className="widget-box">
          <SeguroCalculator />
        </div>

        <div className="widget-box">
          <KilometrosCalculator />
        </div>
      </div>

      {/* CARRITO ABAJO */}
      <div className="col-start-1 col-end-7 mb-8 cart-container ">
        <Cart />
      </div>

    </div>
  );
};

export default DashBoard;

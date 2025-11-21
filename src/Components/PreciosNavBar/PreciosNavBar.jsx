import { useState } from "react";
import precios from "../../data/dataPrecios.json";
import "./preciosNavBar.css"

const PrecioNavbar = () => {
  const [marca, setMarca] = useState("");
  const [mensaje, setMensaje] = useState("");

  const calcularPrecio = () => {
    if (!marca) {
      setMensaje("No se ingresó ninguna marca");
      return;
    }

    const precio = precios[marca];

    if (precio) {
      setMensaje(`El precio del ${marca} es de ${precio.toLocaleString("es-AR")}`);
    } else {
      setMensaje("Marca no encontrada");
    }
  };

  return (
    <div className="precio-container">

      {/* Selector + Botón */}
      <div className="flex flex-col gap-4">
        <select
          className="precio-select"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        >
          <option value="">Seleccionar marca</option>
          <option value="Fiat">Fiat</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Renault">Renault</option>
        </select>

        <button className="precio-btn" onClick={calcularPrecio}>
          Calcular precio
        </button>
      </div>

      {/* Alerta */}
      {mensaje && (
        <div className="precio-alert">
          <h4 className="font-semibold">{mensaje}</h4>
          <button
            className="precio-alert-btn"
            onClick={() => setMensaje("")}
          >
            Aceptar
          </button>
        </div>
      )}
    </div>
  );
};

export default PrecioNavbar;

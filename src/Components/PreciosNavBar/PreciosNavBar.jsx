import { useState } from "react";
import precios from "../../data/dataPrecios.json";

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

  const cerrarAlert = () => setMensaje("");

  return (
    <div className="p-3 bg-light border mb-4">

      {/* Selector */}
      <div className="d-flex gap-3 align-items-center">
        <select 
          className="form-select w-auto"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        >
          <option value="">Seleccionar marca</option>
          <option value="Fiat">Fiat</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Renault">Renault</option>
        </select>

        <button className="btn btn-primary" onClick={calcularPrecio}>
          Calcular precio
        </button>
      </div>

      {/* Alert */}
      {mensaje && (
        <div className="alert alert-primary mt-3">
          <h4>{mensaje}</h4>
          <button className="btn btn-danger mt-2" onClick={cerrarAlert}>
            Aceptar
          </button>
        </div>
      )}
    </div>
  );
};

export default PrecioNavbar;

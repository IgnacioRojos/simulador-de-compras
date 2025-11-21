import { useState } from "react";
import Swal from "sweetalert2";
import "./calcularKilometros.css";


const rendimientos = {
  Fiat: 9.5,
  Volkswagen: 10,
  Renault: 8,
  Chevrolet: 8,
};

const KilometrosCalculator = () => {
  const [marca, setMarca] = useState("");

  const calcular = () => {
    if (!marca) {
      Swal.fire("Seleccione una marca");
      return;
    }

    const rendimiento = rendimientos[marca];

    let lista = "";
    for (let i = 1; i <= 10; i++) {
      const km = i * rendimiento;
      lista += `🚗 Con ${i} litros: ${km} km\n`;
    }

    Swal.fire({
      title: `Kilómetros estimados - ${marca}`,
      html: `<pre style="text-align:left">${lista}</pre>`,
      confirmButtonText: "Aceptar",
      showCloseButton: true,  
    });
  };

  return (
    <div className="km-container mt-4">
      <h5 className="km-title">Calcular Kilómetros del Auto</h5>

      <select
        className="km-select my-2"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      >
        <option value="">Seleccionar marca</option>
        <option value="Fiat">Fiat</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Renault">Renault</option>
        <option value="Chevrolet">Chevrolet</option>
      </select>

      <button className="km-btn" onClick={calcular}>
        Calcular Kilómetros
      </button>
    </div>
  );
};

export default KilometrosCalculator;

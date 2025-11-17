import Swal from "sweetalert2";

const SeguroCalculator = () => {

  const calcularSeguro = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Ingrese el año y precio del vehículo",
      html: `
        <input id="precio" class="swal2-input" placeholder="Precio">
        <input id="anio" class="swal2-input" placeholder="Año">
      `,
      focusConfirm: false,
      showCloseButton: true,  
      preConfirm: () => {
        const precio = parseInt(document.getElementById("precio").value);
        const anio = parseInt(document.getElementById("anio").value);

        if (!precio || !anio) {
          Swal.showValidationMessage("Debe ingresar ambos valores");
          return;
        }

        return precio / anio;
      },
    });

    if (formValues) {
      Swal.fire({
        title: `El precio del seguro es: ${formValues}`,
        showCloseButton: true,  
      });
    }
  };

  return (
    <button className="btn btn-success" onClick={calcularSeguro}>
      Calcular Seguro
    </button>
  );
};

export default SeguroCalculator;
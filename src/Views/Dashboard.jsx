import PrecioNavbar from "../Components/PreciosNavBar/PreciosNavBar";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import FilterNav from "../Components/Navbar/Navbar";
import SeguroCalculator from "../Components/CalcularSeguro/CalcularSeguro";
import KilometrosCalculator from "../Components/CalcularKilometros/CalcularKilometros";
import Cart from "../Components/Cart/Cart";
import { useState } from "react";

const DashBoard = () => {
  const [filtro, setFiltro] = useState("Todos");

  return (
    <>
      <PrecioNavbar />
      <FilterNav onFilter={setFiltro} />
      <ItemListContainer filtro={filtro} />


      <div className="d-flex gap-3 mt-4">
        <SeguroCalculator />
        <KilometrosCalculator />
      </div>
      <Cart/>
    </>
  );
};

export default DashBoard;
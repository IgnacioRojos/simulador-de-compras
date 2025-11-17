import Autos from "../../data/data.json";
import Item from "../Item/Item";
import { useState } from "react";

const ItemListContainer = ({ filtro }) => {
  const [autos] = useState(Autos);

  const autosFiltrados =
    filtro === "Todos" ? autos : autos.filter(auto => auto.marca === filtro);

  return (
    <div className="d-flex flex-wrap gap-4 mt-4">
      {autosFiltrados.map((auto) => (
        <Item key={auto.id} auto={auto} />
      ))}
    </div>
  );
};

export default ItemListContainer;

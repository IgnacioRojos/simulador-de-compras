import Autos from "../../data/data.json";
import Item from "../Item/Item";
import { useState } from "react";
import "./itemListContainer.css"

const ItemListContainer = ({ filtro }) => {
  const [autos] = useState(Autos);

  const autosFiltrados =
    filtro === "Todos" ? autos : autos.filter(auto => auto.marca === filtro);

  return (
    <div className=" itemlist-container grid grid-cols-4 gap-4">
      {autosFiltrados.map((auto) => (
        <Item key={auto.id} auto={auto} />
      ))}
    </div>
  );
};

export default ItemListContainer;

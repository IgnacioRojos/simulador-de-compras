import { useCart } from "../Context/CartContext";
import "./Item.css";

const Item = ({ auto }) => {
  const { addToCart } = useCart();

  return (
    <div className="item-card p-4 flex flex-col">
      <img
        src={auto.img}
        className="w-full h-40 object-cover"
        alt={auto.titulo}
      />

      <div className="flex flex-col justify-between grow mt-4">
        <h5 className="item-title mb-4">{auto.titulo}</h5>

        <button
          className="item-btn"
          onClick={() => addToCart(auto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
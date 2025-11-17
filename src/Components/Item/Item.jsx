import { useCart } from "../Context/CartContext";

const Item = ({ auto }) => {
  const { addToCart } = useCart();

  return (
    <div className="card p-3 shadow" style={{ width: "16rem" }}>
      <img src={auto.img} className="card-img-top" alt={auto.titulo} />

      <div className="card-body">
        <h5 className="card-title">{auto.titulo}</h5>
        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(auto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;

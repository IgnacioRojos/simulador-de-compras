import { useCart } from "../Context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>
                {item.titulo} — Cantidad: {item.cantidad}
              </span>
              <button
                className="cart-btn-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <button className="cart-btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between p-2 border">
              <span>
                {item.titulo} — Cantidad: {item.cantidad}
              </span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <button className="btn btn-warning mt-3" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

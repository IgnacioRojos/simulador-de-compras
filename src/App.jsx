import { useState ,useEffect } from "react";
import DashBoard from "./Views/Dashboard";
import Login from "./Components/Login/login"; // <-- importa tu login
import { CartProvider } from "./Components/Context/CartContext";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // verifica localStorage al iniciar
    const user = localStorage.getItem("usuario");
    if (user) {
      setIsLogged(true);
    }
  }, []);

  return (
    <CartProvider>
      {isLogged ? (
        <DashBoard />
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
    </CartProvider>
  );
}

export default App;
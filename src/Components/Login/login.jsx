import { useState } from "react";
import "./login.css";


const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    const user = {
      nom: usuario,
      pass: contraseña,
    };

    if (usuario === "ignacio" && contraseña === "1234") {
      localStorage.setItem("usuario", JSON.stringify(user));
      window.location.href = "/Dashboard"; 
    } else {
      setError("Datos erróneos al iniciar sesión");
      setTimeout(() => setError(""), 1500);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Bienvenido a concesionario Sport <br/>
        Inicia de Sesión</h3>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={login}>
        Iniciar
      </button>

      {error && (
        <div className="alert alert-danger text-center mt-3">
          {error}
        </div>
      )}
    </div>
  );
};

export default Login;
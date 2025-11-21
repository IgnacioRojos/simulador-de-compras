import "./navBar.css";

const FilterNav = ({ onFilter }) => {
  const marcas = ["Todos", "Fiat", "Volkswagen", "Ford", "Chevrolet", "Toyota", "Jeep"];

  return (
    <nav className="filternav-container">
      {marcas.map((marca) => (
        <button
          key={marca}
          className="filternav-btn"
          onClick={() => onFilter(marca)}
        >
          {marca}
        </button>
      ))}
    </nav>
  );
};

export default FilterNav;

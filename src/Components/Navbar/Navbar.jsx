const FilterNav = ({ onFilter }) => {
  const marcas = ["Todos", "Fiat", "Volkswagen", "Ford", "Chevrolet", "Toyota", "Jeep"];

  return (
    <nav className="d-flex gap-3 p-3 bg-dark text-white">
      {marcas.map((marca) => (
        <button 
          key={marca} 
          className="btn btn-light"
          onClick={() => onFilter(marca)}
        >
          {marca}
        </button>
      ))}
    </nav>
  );
};

export default FilterNav;
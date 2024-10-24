import "../../styles/filtros.css";
const Precio = () => {
    return (
        <div id="price-filter">
            <p>
                Precio
            </p>
            <button className="filters">
                15.0000 a 25.0000
            </button>
            <button className="filters">
                25.0000 a 40.0000
            </button>
            <button className="filters">
                más de 40.0000
            </button>
        </div>
    )
}

export default Precio
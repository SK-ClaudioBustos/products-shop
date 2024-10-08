import { Link } from "react-router-dom";
import "../styles/welcome.css";
const Welcome = () => {
    return (
        <div className='welcome-container'>
            <h1>Bienvenidos a mi pagina</h1>
            <h3>Está pagina es un carrito de compras hecho por mí</h3>
            <Link to="/inicio">
                <span className="enlace">Ir a la tienda</span>
            </Link>
        </div>
    )
}

export default Welcome
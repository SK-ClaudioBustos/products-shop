import { Link } from "react-router-dom";
import "../styles/welcome.css";
const Welcome = () => {
    return (
        <div className='welcome-container'>
            <h1>Prototipo de Gestor de Productos</h1>
            <Link to="/inicio">
                <span className="enlace">Ir al Gestor</span>
            </Link>
        </div>
    )
}

export default Welcome
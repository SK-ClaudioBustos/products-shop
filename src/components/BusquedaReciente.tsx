import { Link } from "react-router-dom";
import "../styles/busquedaReciente.css";
import { Product } from '../types/product';

type BusquedaRecienteProps = {
    product: Product
}

const BusquedaReciente = ({ product }: BusquedaRecienteProps) => {
    console.log(product)
    return (
        <Link to={`/producto/${product.product.id}`}>
            <div className='busqueda-reciente'>
                <img
                    src={product.pictures.stack.retina}
                    alt={product.pictures.stack.tags.alt}
                />
                <span>{product.product.name}</span>
                <p>${product.price.amount}</p>
            </div>
        </Link>
    )
}

export default BusquedaReciente
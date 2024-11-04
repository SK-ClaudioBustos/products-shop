import "../styles/busquedaReciente.css";
import { Product } from '../types/product';

type BusquedaRecienteProps = {
    product: Product
}

const BusquedaReciente = ({ product }: BusquedaRecienteProps) => {
    const handleClick = () => {
        location.href = `/producto/${product.product.id}`;
    }
    return (
        <div className='busqueda-reciente' role="link" onClick={handleClick}>
            <img
                src={product.pictures.stack.retina}
                alt={product.pictures.stack.tags.alt}
            />
            <span>{product.product.name}</span>
            <p>${product.price.amount}</p>
        </div>
    )
}

export default BusquedaReciente
import { Link } from "react-router-dom";
import "../styles/productItem.css";
import { type Product } from "../types";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <li>
            <Link className="product-item" to={`/producto/${product.id}`}>
                <img src={product.pictures.stack.normal} alt={product.title} />
                <div className="product-details">
                    <p className="product-title">{product.title}</p>
                    <span className="product-price">{"$" + product.price.amount}</span>
                </div>
            </Link>
        </li>
    )
}

export default ProductItem
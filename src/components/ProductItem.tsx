import "../styles/productItem.css";
import { type Product } from "../types";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <>
            <li className="product-item">
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-details">
                    <span style={{ color: "#000" }}>{product.title}</span>
                    <span style={{ color: "#000" }}><b>{`Cantidad: ${product.stock}`}</b></span>
                </div>
            </li>
        </>
    )
}

export default ProductItem
import "../../styles/productItem.css";
import { type Product } from "../../types/product";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <li>
            <a className="product-item" href={`/producto/${product.product?.id}`}>
                <img className="product-img" src={product.pictures.stack.normal} alt={product.title} />
                <div className="product-details">
                    <p className="product-title">{product.title}</p>
                    <span className="product-price">{"$" + product.price.amount}</span>
                </div>
            </a>
        </li>
    )
}

export default ProductItem
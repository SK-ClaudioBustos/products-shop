import { Link } from "react-router-dom";
import "../styles/productItem.css";
import { type Product } from "../types";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <li className="product-item">
            <Link to={`/producto/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-details">
                    <span>{product.title}</span>
                    <span><b>{"$" + product.price}</b></span>
                </div>
                {/* <Button>
                <AddShoppingCartIcon/>
            </Button> */}
            </Link>
        </li>
    )
}

export default ProductItem
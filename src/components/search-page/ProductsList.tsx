import "../../styles/productsList.css";
import { type Product } from '../../types/product';
import ProductItem from './ProductItem';

interface ProductsListProps {
    products: Product[]
}

const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <ul className='products-list'>
            {
                products.length > 0 && products.map((product: Product) => <ProductItem key={product.id} product={product} />)
            }
        </ul>
    )
}

export default ProductsList
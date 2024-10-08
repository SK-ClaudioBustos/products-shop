import { useEffect, useState } from 'react';
import "../styles/productsList.css";
import { type Product } from '../types';
import ProductItem from './ProductItem';
import Loading from '../utils/Loading';

const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading descripcion='Cargando Productos'/>;
    return (
        <ul className='products-list'>
            {
                products.length > 0 && products.map((product: Product) => <ProductItem key={product.id} product={product} />)
            }
        </ul>
    )
}

export default ProductsList
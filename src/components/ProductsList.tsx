import { useEffect, useState } from 'react';
import { useProductShopContext } from '../context/ProductsShopContext';
import "../styles/productsList.css";
import { type Product } from '../types';
import Loading from '../utils/Loading';
import ProductItem from './ProductItem';

const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { search } = useProductShopContext();

    useEffect(() => {
        let API_URL = "https://dummyjson.com/products";
        if (search) {
            API_URL += `/search?q=${search}`;
        }
        setLoading(true);
        fetch(API_URL)
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
                setLoading(false);
            });
    }, [search]);

    if (loading) return <Loading descripcion='Cargando Productos' />;
    return (
        <ul className='products-list'>
            {
                products.length > 0 && products.map((product: Product) => <ProductItem key={product.id} product={product} />)
            }
        </ul>
    )
}

export default ProductsList
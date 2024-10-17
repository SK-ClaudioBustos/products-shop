import { useEffect, useState } from 'react';
import { useProductShopContext } from '../context/ProductsShopContext';
import "../styles/productsList.css";
import { type Product } from '../types';
import Loading from '../utils/Loading';
import ProductItem from './ProductItem';

const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const { search } = useProductShopContext();

    useEffect(() => {
        const API_URL = 'https://mercado-libre4.p.rapidapi.com/search?country=AR&search=computadoras&offset=0&limit=20';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '82d63789eamshac8b43341a8f8b8p14a07ajsnf2df6ee7c23a',
                'x-rapidapi-host': 'mercado-libre4.p.rapidapi.com'
            }
        };
        setLoading(true);
        fetch(API_URL, options)
            .then(res => {
                if (!res.ok) {
                    setError(true);
                }
                return res.json();
            })
            .then(res => {
                setProducts(res.results);
                setLoading(false);
            })
            .catch(() => setError(true));
    }, [search]);

    if (loading) return <div className='loading-container'><Loading descripcion='Cargando Productos' /></div>;
    if (error) return <div><span>Ocurrio un error</span></div>;

    return (
        <ul className='products-list'>
            {
                products.length > 0 && products.map((product: Product) => <ProductItem key={product.id} product={product} />)
            }
        </ul>
    )
}

export default ProductsList
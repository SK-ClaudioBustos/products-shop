import { useFetchProducts } from "../../lib";
import "../../styles/productsList.css";
import { type Product } from '../../types/product';
import { Error, Loading } from "../../utils";
import { ProductItem } from './ProductItem';

interface ProductsListProps {
    search: string
}

export const ProductsList = ({ search }: ProductsListProps) => {

    const {
        data,
        loading,
        error
    } = useFetchProducts({ search });

    if (loading) return <Loading />;
    if (error) return <Error />;
    return (
        <ul className='products-list'>
            {
                data.length > 0 && data.map((product: Product) => <ProductItem key={product.id} product={product} />)
            }
        </ul>
    )
}
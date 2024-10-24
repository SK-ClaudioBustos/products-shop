import { useLoaderData } from "react-router-dom";
import FilterMenu from "../components/FilterMenu";
import ProductsList from "../components/ProductsList";
import useFetchProducts from "../lib/useFetchProducts";
import "../styles/search.css";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

const Search = () => {
    const { search } = useLoaderData() as any;

    const {
        data,
        loading,
        error
    } = useFetchProducts({ search });

    if (loading) return <Loading descripcion='Cargando Productos' />;
    if (error) return <Error />;

    return (
        <div id="search-content">
            <FilterMenu filters={data?.filters} />
            <ProductsList products={data?.products} />
        </div>
    )
}

export default Search
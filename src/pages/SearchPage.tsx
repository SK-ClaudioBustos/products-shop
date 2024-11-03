import { useLoaderData } from "react-router-dom";
import FilterMenu from "../components/search-page/FilterMenu";
import ProductsList from "../components/search-page/ProductsList";
import useFetchProducts from "../lib/useFetchProducts";
import "../styles/search.css";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

const SearchPage = () => {
    const { search } = useLoaderData() as any;

    const {
        data,
        loading,
        error
    } = useFetchProducts({ search });

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <div id="search-content">
            <FilterMenu filters={data?.filters} />
            <ProductsList products={data?.products} />
        </div>
    )
}

export default SearchPage
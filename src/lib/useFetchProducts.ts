import { useEffect, useState } from "react";
import { Filter, Product } from "../types/product";

type Data = {
    products: Product[],
    filters: Filter[]
}

interface FetchResults {
    data: Data
    loading: boolean
    error: boolean
}

interface useFetchProps {
    search: string
}

const FILTERS_PERMITED = [
    "Categorías",
    "Costo de envío",
    "Precio",
    "Descuentos",
    "Marca"
];

function useFetchProducts({ search }: useFetchProps): FetchResults {
    const [data, setData] = useState<Data>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const LIMIT = 5;
        const API_URL = `${import.meta.env.VITE_API_URL}/search?country=AR&search=${search}&offset=0&limit=${LIMIT}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': `${import.meta.env.VITE_API_KEY}`,
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
                const filtersArray: Filter[] = res.available_filters.filter((filtro: Filter, index: number, self: Filter[]) =>
                    FILTERS_PERMITED.includes(filtro.name) && index === self.findIndex((t) => t.name === filtro.name)
                );
                const data = {
                    products: res.results.slice(0, 5),
                    filters: filtersArray
                };
                setData(data);
                setLoading(false);
            })
            .catch(() => setError(true));
    }, [search]);

    return {
        data: {
            filters: data?.filters ?? [],
            products: data?.products ?? []
        },
        loading,
        error
    }
}

export default useFetchProducts;
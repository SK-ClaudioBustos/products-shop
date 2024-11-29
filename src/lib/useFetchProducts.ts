import { useEffect, useState } from "react";
import { Product } from "../types/product";

interface FetchResults {
    data: Product[]
    loading: boolean
    error: boolean
}

interface useFetchProps {
    search: string
}

export function useFetchProducts({ search }: useFetchProps): FetchResults {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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
                const data = res.results.slice(0, 6);
                setData(data);
                setLoading(false);
            })
            .catch(() => setError(true));
    }, [search]);

    return {
        data: data,
        loading,
        error
    }
}
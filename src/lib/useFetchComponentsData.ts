import { useEffect, useState } from "react";
import { ProductDetailsComponent } from "../types/productDetails";

const COMPONENT_TYPES = [
    "header",
    "gallery",
    "variations",
]

type useFetchParams = {
    id: string | undefined
}

type FetchComponentsDataResult = {
    components: ProductDetailsComponent[]
    loading: boolean
    error: boolean
}

function useFetchComponentsData({ id }: useFetchParams): FetchComponentsDataResult {
    const [components, setComponents] = useState<ProductDetailsComponent[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        const API_URL = `${import.meta.env.VITE_API_URL}/product/${id}?country=AR`;
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
                setComponents(res.components.filter(
                    (component: ProductDetailsComponent, index: number, self: ProductDetailsComponent[]) =>
                        COMPONENT_TYPES.includes(component.type) && index === self.findIndex((c: ProductDetailsComponent) => c.type === component.type)
                ));
                setLoading(false);
            })
            .catch(() => setError(true));
    }, [id]);

    return {
        components,
        loading,
        error
    }
}

export default useFetchComponentsData;
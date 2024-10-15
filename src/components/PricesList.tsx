import { useEffect, useState } from "react";
import { Product } from "../types";
import Loading from "../utils/Loading";

const PricesList = () => {
    const [items, setItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let API_URL = "https://dummyjson.com/products";
        setLoading(true);
        fetch(API_URL)
            .then(res => res.json())
            .then(res => {
                setItems(res.products)
                setLoading(false);
            });
    }, []);
    if (loading) return <Loading descripcion='Cargando Precios' />;

    return (
        <ul>
            <li key="6942421a" style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
                <span><b>Producto</b></span>
                <span><b>Precio</b></span>
            </li>
            {
                items.length > 0 && items.map((item: Product) => <ListItem key={item.id} name={item.title} price={item.price} />)
            }
        </ul>
    )
}

export default PricesList

interface Props {
    name: any
    price: any
}

const ListItem = ({ name, price }: Props) => {
    return (
        <li style={{ display: "flex", justifyContent: "space-between", background: "#e1e2e3", borderRadius: "5px", padding: "5px", marginBottom: "2px" }}>
            <span>{name}</span>
            <span><b>{"$" + price}</b></span>
        </li>
    )
}
import { useEffect, useState } from "react";
import { Product } from "../types";
import Loading from "../utils/Loading";
import "../styles/codeList.css";

const CodeList = () => {
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
    if (loading) return <Loading descripcion='Cargando Codigos de Barra' />;
    return (
        <table style={{ width: "100%"}}>
            <thead>
                <tr>
                    <th scope="col">
                        Producto
                    </th>
                    <th scope="col">
                        Marca
                    </th>
                    <th scope="col">
                        Codigo
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.length > 0 && items.map((item: Product) => (
                    <tr key={item.id}>
                        <td scope="row">
                            <span>{item.title}</span>
                        </td>
                        <td scope="row">
                            <span>{item.brand}</span>
                        </td>
                        <td scope="row">
                            <span>{item.sku}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CodeList
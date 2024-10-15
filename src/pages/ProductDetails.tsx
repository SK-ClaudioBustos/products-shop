import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import Loading from "../utils/Loading";

const ProductDetails = () => {
    const { id } = useParams();
    const [dataProducto, setDataProducto] = useState<Product>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const API_URL = `https://dummyjson.com/products/${id}`;
        setLoading(true);
        fetch(API_URL)
            .then(res => res.json())
            .then(res => {
                setDataProducto(res)
                setLoading(false);
            });
    }, [])
    if (loading) return <Loading descripcion='Cargando datos del Producto' />;

    return (
        <div style={{ display: "flex", padding: "10px", justifyContent: "start", flexDirection: "column" }}>
            <h1>{`Detalles del producto`}</h1>
            <div style={{ padding: "20px" }}>
                <h2>{dataProducto?.title}</h2>
                <h3>{dataProducto?.brand}</h3>
                <h2><b>{`$${dataProducto?.price}`}</b></h2>
                <p>{dataProducto?.description}</p>
            </div>
        </div>
    )
}

export default ProductDetails
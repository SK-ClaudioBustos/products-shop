import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <>
            <div>Detalles del producto con id: {" " + id}</div>
            {/* <Button>
                <AddShoppingCartIcon/>
            </Button> */}
        </>
    )
}

export default ProductDetails
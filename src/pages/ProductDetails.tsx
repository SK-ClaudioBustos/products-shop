import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/product-details/DetailsHeader";
import Gallery from "../components/product-details/Gallery";
import ProductVariations from '../components/product-details/ProductVariations';
import useFetchComponentsData from '../lib/useFetchComponentsData';
import "../styles/productDetails.css";
import { ComponentPictureConfig, Picture } from "../types/productDetails";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

const ProductDetails = () => {
    const { id } = useParams();
    const [idProduct, setIdProduct] = useState(id);

    const { components, loading, error } = useFetchComponentsData({ id: idProduct });

    const handleChangeVariation = (idVariation: string) => {
        setIdProduct(idVariation);
    }

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <div id="product-details">
            <div className="back-button-container">
                <button type='button' id="back-button" onClick={() => history.back()}>
                    <ArrowBackIcon fontSize='large' />
                </button>
            </div>
            {
                components.length > 0 && (<div className='components-container'>
                    <DetailsHeader component={components[0]} />
                    <Gallery
                        key={components[1].id}
                        component={components[1]}
                        picture_config={components[1].picture_config as ComponentPictureConfig}
                        first_picture={components[1].pictures && components[1].pictures[0] as Picture}
                    />
                    <ProductVariations
                        key={components[2].id}
                        component={components[2]}
                        variante_seleccionada={
                            {
                                id: components[2].pickers ? components[2].pickers[0].id : "",
                                thumbnaiId: components[2].pickers ? components[2].pickers[0].thumbnail?.id : "",
                                text: components[2].pickers ? components[2].pickers[0].selected_option.text : ""
                            }}
                        picture_config={components[2].picture_config as ComponentPictureConfig}
                        handleChangeVariation={handleChangeVariation}
                    />
                </div>
                )
            }
        </div>
    )
}

export default ProductDetails;
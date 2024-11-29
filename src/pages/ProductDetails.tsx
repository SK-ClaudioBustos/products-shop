import { useParams } from "react-router-dom";
import { DetailsHeader, Gallery, BackButton } from "../components";
import { useFetchComponentsData } from '../lib';
import "../styles/productDetails.css";
import { ComponentPictureConfig, Picture } from "../types/productDetails";
import { Error, Loading } from "../utils";

export const ProductDetails = () => {
    const { id } = useParams();

    const { components, loading, error } = useFetchComponentsData({ id });

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <div id="product">
            <BackButton/>
            {
                components.length > 0 && (
                    <div className='components-container'>
                        <DetailsHeader component={components[0]} />
                        <Gallery
                            key={components[1].id}
                            component={components[1]}
                            picture_config={components[1].picture_config as ComponentPictureConfig}
                            first_picture={components[1].pictures && components[1].pictures[0] as Picture}
                        />
                    </div>
                )
            }
        </div>
    )
}
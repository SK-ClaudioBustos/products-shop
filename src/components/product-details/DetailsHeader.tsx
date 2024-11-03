import "../../styles/detailsHeader.css";
import { ProductDetailsComponent } from "../../types/productDetails";

interface DetailsHeaderProps {
    component: ProductDetailsComponent
}

const DetailsHeader = ({ component }: DetailsHeaderProps) => {
    return (
        <div className="details-header">
            <span>{component.subtitle}</span>
            <h2>{component?.title?.toString()}</h2>
            {
                component?.reviews && (
                    <div>
                        <span>
                            {`Stars ${component.reviews.stars}`}
                        </span>
                        <span>
                            {`(${component.reviews.amount})`}
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default DetailsHeader
import "../../styles/detailsHeader.css";
import { ProductDetailsComponent } from "../../types/productDetails";

interface DetailsHeaderProps {
    component: ProductDetailsComponent
}

export const DetailsHeader = ({ component }: DetailsHeaderProps) => {
    return (
        <div className="details-header">
            <span>{component.subtitle}</span>
            <h2>{component?.title?.toString()}</h2>
            {
                component?.reviews && (
                    <div>
                        <span>
                            {`${component.reviews.stars} Stars`}
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
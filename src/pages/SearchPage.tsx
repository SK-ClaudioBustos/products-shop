import { useLoaderData } from "react-router-dom";
import { BackButton, ProductsList } from "../components";
import "../styles/search.css";

export const SearchPage = () => {
    const { search } = useLoaderData() as any;

    return (
        <div id="search-content">
            <div style={{ width: "75vw", marginBottom: "2rem" }}>
                <BackButton />
            </div>
            <ProductsList search={search} />
        </div>
    )
}
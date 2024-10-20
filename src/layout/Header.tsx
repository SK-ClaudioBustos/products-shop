import { useProductShopContext } from "../context/ProductsShopContext";
import "../styles/header.css";
import CabeceraTabs from "./CabeceraTabs";

const Header = () => {
    const { handleSearch } = useProductShopContext();
    return (
        <header>
            <div id="search-section">
                <h1><i>ProductsShop</i></h1>
                <search id="search">
                    <input id="search-bar" type="text" placeholder="Buscar productos..." onChange={(event) => handleSearch(event.target.value)} />
                </search>
            </div>
            <CabeceraTabs/>
        </header>
    )
}

export default Header
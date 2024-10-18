import { useProductShopContext } from "../context/ProductsShopContext";
import "../styles/header.css";

const Header = () => {
    const { handleSearch } = useProductShopContext();
    return (
        <header>
            <h1><i>ProductsShop</i></h1>
            <input id="search-bar" type="text" placeholder="Buscar productos..." onChange={(event) => handleSearch(event.target.value)} />
        </header>
    )
}

export default Header
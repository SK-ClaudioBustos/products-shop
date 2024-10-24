import "../styles/header.css";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header>
            <div id="search-section">
                <h1><i>ProductsShop</i></h1>
                <SearchBar />
            </div>
            {/* <CabeceraTabs /> */}
        </header>
    )
}

export default Header
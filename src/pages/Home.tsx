import HomeContent from "../components/HomeContent";
import ProductShopProvider from "../context/ProductsShopContext";
import "../styles/home.css";

const Home = () => {
    return (
        <ProductShopProvider>
            <HomeContent />
        </ProductShopProvider>
    )
}

export default Home
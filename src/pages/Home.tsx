import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import ProductShopProvider from "../context/ProductsShopContext";
import "../styles/home.css";

const Home = () => {
    return (
        <ProductShopProvider>
            <main>
                <Header />
                <div id="home-content">
                    <Navbar />
                    <ProductsList />
                </div>
                <footer></footer>
            </main>
        </ProductShopProvider>
    )
}

export default Home
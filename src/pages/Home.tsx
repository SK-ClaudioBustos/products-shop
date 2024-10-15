import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import ProductShopProvider from "../context/ProductsShopContext";
import "../styles/home.css";

const Home = () => {
    return (
        <ProductShopProvider>
            <div id="home-content">
                <Navbar />
                <main>
                    <Header />
                    <ProductsList />
                    <footer></footer>
                </main>
            </div>
        </ProductShopProvider>
    )
}

export default Home
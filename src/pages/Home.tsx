import Header from "../layout/Header";
import FilterMenu from "../components/FilterMenu";
import ProductsList from "../components/ProductsList";
import ProductShopProvider from "../context/ProductsShopContext";
import "../styles/home.css";
import Footer from "../layout/Footer";

const Home = () => {
    return (
        <ProductShopProvider>
            <main>
                <Header />
                <div id="home-content">
                    <FilterMenu />
                    <ProductsList />
                </div>
                <Footer/>
            </main>
        </ProductShopProvider>
    )
}

export default Home
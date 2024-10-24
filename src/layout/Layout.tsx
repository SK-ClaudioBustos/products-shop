import { Outlet } from "react-router-dom";
import ProductShopProvider from "../context/ProductsShopContext";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../styles/layout.css";

const Layout = () => {
    return (
        <ProductShopProvider>
            <main>
                <Header />
                <div id="content">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </ProductShopProvider>
    )
}

export default Layout
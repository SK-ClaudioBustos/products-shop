import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../styles/layout.css";

const Layout = () => {
    return (
        <main>
            <Header />
            <div id="content">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Layout
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
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
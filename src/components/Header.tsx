import { useProductShopContext } from "../context/ProductsShopContext";
import "../styles/header.css";
import { TabValue } from "../types";
import Tab from "./Tab";

const TABS = [
    {
        title: "Stock",
        value: TabValue.ProductsStock
    },
    {
        title: "Listado de Precios",
        value: TabValue.ProductsPrices
    },
    {
        title: "Codigos de Barra",
        value: TabValue.ProductsCodes
    },
];

const Header = () => {
    const { tab, handleSearch } = useProductShopContext();
    return (
        <header>
            <div className="header-content">
                <h1><i>Gestor Productos</i></h1>
                {tab === "products_stock" && <input id="search-bar" type="text" placeholder="Buscar Productos..." onChange={(event) => handleSearch(event.target.value)} />}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", gap: "1px" }}>
                {
                    TABS.map((tab) => (
                        <Tab key={tab.value} title={tab.title} value={tab.value} />
                    ))
                }
            </div>
        </header>
    )
}

export default Header
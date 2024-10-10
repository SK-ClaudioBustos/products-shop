import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import { useProductShopContext } from "../context/ProductsShopContext";
import { TabValue } from "../types";
import CodeList from "./CodeList";
import PricesList from "./PricesList";

const HomeContent = () => {
    const { tab } = useProductShopContext();
    return (
        <main>
            <Header />
            {
                tab === TabValue.ProductsStock && <ProductsList />
            }
            {
                tab === TabValue.ProductsPrices && <PricesList />
            }
            {
                tab === TabValue.ProductsCodes && <CodeList />
            }
            <footer></footer>
        </main>
    )
}

export default HomeContent
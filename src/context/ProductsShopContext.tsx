import { createContext, ReactNode, useContext, useState } from "react";
import { TabValue } from "../types";

const ProductShopContext = createContext<ProductShopData | undefined>(undefined);

interface ProductShopProviderProps {
    children: ReactNode
}

interface ProductShopData {
    search: string;
    tab: TabValue;
    handleSearch: (data: string) => void
    handleChangeTab: (tab: TabValue) => void
}

const ProductShopProvider: React.FC<ProductShopProviderProps> = (props: ProductShopProviderProps) => {
    const { children } = props;
    const [search, setSearch] = useState<string>("");
    const [tab, setTab] = useState<TabValue>(TabValue.ProductsStock);

    // functions
    const handleSearch = (data: string) => {
        setSearch(data);
    }
    const handleChangeTab = (tab: TabValue) => {
        setTab(tab);
    }

    const initialValue: ProductShopData = {
        search,
        tab,
        handleSearch,
        handleChangeTab
    };

    return <ProductShopContext.Provider value={initialValue}>{children}</ProductShopContext.Provider>
}

export default ProductShopProvider;

export function useProductShopContext() {
    const context = useContext(ProductShopContext);
    if (!context) {
        throw new Error("useProductShop no se puede usar sin un provider");
    }
    return context;
}
import { createContext, ReactNode, useContext, useState } from "react";
import { Tab } from "../data/tabs_data";

const ProductShopContext = createContext<ProductShopData | undefined>(undefined);

interface ProductShopProviderProps {
    children: ReactNode
}

interface ProductShopData {
    tab: string;
    handleChangeTab: (data: Tab) => void
}

const ProductShopProvider: React.FC<ProductShopProviderProps> = (props: ProductShopProviderProps) => {
    const { children } = props;
    const [tab, setTab] = useState<Tab>(Tab.Ninguna);

    // functions
    const handleChangeTab = (tab: Tab) => {
        setTab(tab);
    }

    const initialValue: ProductShopData = {
        tab,
        handleChangeTab,
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
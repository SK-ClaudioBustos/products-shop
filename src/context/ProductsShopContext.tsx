import { createContext, ReactNode, useContext, useState } from "react";

const ProductShopContext = createContext<ProductShopData | undefined>(undefined);

interface ProductShopProviderProps {
    children: ReactNode
}

interface ProductShopData {
    search: string;
    handleSearch: (data: string) => void
}

const ProductShopProvider: React.FC<ProductShopProviderProps> = (props: ProductShopProviderProps) => {
    const { children } = props;
    const [search, setSearch] = useState<string>("computadoras");

    // functions
    const handleSearch = (data: string) => {
        setSearch(data);
    }

    const initialValue: ProductShopData = {
        search,
        handleSearch,
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
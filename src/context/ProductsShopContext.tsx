import { createContext, ReactNode, useContext, useState } from "react";
import { Category } from "../types";

const ProductShopContext = createContext<ProductShopData | undefined>(undefined);

interface ProductShopProviderProps {
    children: ReactNode
}

interface ProductShopData {
    search: string;
    category: Category | null;
    handleSearch: (data: string) => void
    handleCategorySelected: (category: Category) => void
}

const ProductShopProvider: React.FC<ProductShopProviderProps> = (props: ProductShopProviderProps) => {
    const { children } = props;
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<Category | null>(null);

    // functions
    const handleSearch = (data: string) => {
        setSearch(data);
    }
    const handleCategorySelected = (category: Category) => {
        setCategory(category);
    }

    const initialValue: ProductShopData = {
        search,
        category,
        handleSearch,
        handleCategorySelected
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
import { useProductShopContext } from "../context/ProductsShopContext";
import "../styles/tabs.css";

interface TabProps {
    label: string
    value: string
}

const Tab = ({ label, value }: TabProps) => {
    const { search, handleSearch } = useProductShopContext();

    const handleTabSelected = () => {
        handleSearch(value);
    }

    return (
        <div className="tab-container" role="button" onClick={handleTabSelected}>
            <span className={value === search ? "tab-selected" : "tab"}>
                {label}
            </span>
            <div className={value === search ? "tab-underline-selected" : "tab-underline"}></div>
        </div>
    )
}

export default Tab
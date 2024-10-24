import { NavLink } from "react-router-dom";
import { useProductShopContext } from "../context/ProductsShopContext";
import { Tab } from "../data/tabs_data";
import "../styles/tabs.css";

interface TabProps {
    value: Tab
}

const TabItem = ({ value }: TabProps) => {
    const { tab, handleChangeTab } = useProductShopContext();

    const handleTabSelected = () => {
        handleChangeTab(value);
    }

    return (
        <NavLink to={`./categoria/${tab}`}>
            <div className="tab-container" role="button" onClick={handleTabSelected}>
                <span className={value === tab ? "tab-selected" : "tab"}>
                    {value}
                </span>
                <div className={value === tab ? "tab-underline-selected" : "tab-underline"}></div>
            </div>
        </NavLink>
    )
}

export default TabItem
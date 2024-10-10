import { useProductShopContext } from "../context/ProductsShopContext"
import { TabValue } from "../types";

interface Props {
    title: string
    value: TabValue
}

const Tab = ({ title, value }: Props) => {
    const { tab, handleChangeTab } = useProductShopContext();
    const handleChange = () => {
        handleChangeTab(value);
    }
    return (
        <button onClick={handleChange}>
            <span style={{ color: tab === value ? "#000" : "#c2c2c2", fontWeight: "bold"}}>{title}</span>
            <div style={{ backgroundColor: tab === value ? "#000" : "#c2c2c2", width: "100%", height: "5%" }}></div>
        </button>
    )
}

export default Tab
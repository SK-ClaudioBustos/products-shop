import { NavLink, useLoaderData } from "react-router-dom";
import { Tab } from "../data/tabs_data";
import "../styles/tabs.css";

interface TabProps {
    value: Tab
}

const TabItem = ({ value }: TabProps) => {
    const { search } = useLoaderData() as any;

    return (
        <NavLink to={`./busqueda/${value}`}>
            <div className="tab-container">
                <span className={value === search ? "tab-selected" : "tab"}>
                    {value}
                </span>
                <div className={value === search ? "tab-underline-selected" : "tab-underline"}></div>
            </div>
        </NavLink>
    )
}

export default TabItem
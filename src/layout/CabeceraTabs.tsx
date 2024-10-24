import "../styles/tabs.css";
import TabItem from "./TabItem";
import TABS from "../data/tabs_data";

const CabeceraTabs = () => {
    return (
        <div id="sections-tabs">
            {
                TABS.map((tab) => (
                    <TabItem key={tab} value={tab} />
                ))
            }
        </div>
    )
}

export default CabeceraTabs
import "../styles/tabs.css";
import Tab from "./Tab";

const TABS = [
    {
        label: "Computadoras",
        value: "computadoras",
    },
    {
        label: "Celulares",
        value: "celulares",
    },
    {
        label: "Auriculares",
        value: "auriculares",
    },
    {
        label: "NoteBooks",
        value: "notebooks",
    },
    {
        label: "Tablets",
        value: "tablets",
    },
    {
        label: "Teclados",
        value: "teclados",
    },
]

const CabeceraTabs = () => {
    return (
        <div id="sections-tabs">
            {
                TABS.map((tab) => (
                    <Tab {...tab} />
                ))
            }
        </div>
    )
}

export default CabeceraTabs
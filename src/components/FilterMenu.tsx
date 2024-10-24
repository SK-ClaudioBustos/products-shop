import "../styles/filterMenu.css";
import { Filter, FilterValue } from "../types";

interface FilterMenuProps {
    filters: Filter[]
}

const FilterMenu = ({ filters }: FilterMenuProps) => {
    return (
        <div id="filter-menu">
            {
                filters.map((filter: Filter, key: number) => (
                    <div key={filter.id + "_" + key} style={{ margin: "2vh 0px" }}>
                        <p>
                            <b>{filter.name}</b>
                        </p>
                        <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {
                                filter.values.slice(0, 5).map((item: FilterValue) => (
                                    <li key={item.id}>
                                        <button type="button" style={{ padding: "2px 4px", color: "#000", fontSize: "0.8rem" }}>
                                            <span style={{ color: "#000" }}>
                                                {item.name}
                                            </span>
                                            <span style={{ color: "#000" }}>
                                                {`(${item.results})`}
                                            </span>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default FilterMenu
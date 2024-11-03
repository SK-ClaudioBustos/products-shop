import "../../styles/filterMenu.css";
import { Filter, FilterValue } from "../../types/product";

interface FilterMenuProps {
    filters: Filter[]
}

const FilterMenu = ({ filters }: FilterMenuProps) => {
    return (
        <div id="filter-menu">
            {
                filters.map((filter: Filter, key: number) => (
                    <div key={filter.id + "_" + key} className="filter-container">
                        <p>
                            <b>{filter.name}</b>
                        </p>
                        <ul className="filters-options">
                            {
                                filter.values.slice(0, 5).map((item: FilterValue) => (
                                    <li key={item.id} className="filter-option">
                                        <span>
                                            {item.name}
                                        </span>
                                        <span>
                                            {`(${item.results})`}
                                        </span>
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
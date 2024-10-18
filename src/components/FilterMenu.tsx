import "../styles/filterMenu.css";

interface Filter {
    label: string;
    value: string;
}

const FILTERS: Filter[] = [
    {
        label: "Precio",
        value: "price"
    },
    {
        label: "Marca",
        value: "brand"
    },
    {
        label: "Descuento",
        value: "descount"
    },
];

const FilterMenu = () => {
    return (
        <div id="filter-menu">
            <ul>
                {
                    FILTERS.map((filter: Filter) => (
                        <li key={filter.value}>
                            <span>
                                {filter.label}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterMenu

interface MarcaProps {
    brands: string[];
}

const Marca = ({ brands }: MarcaProps) => {
    return (
        <div id="price-filter">
            <p>
                Marca
            </p>
            {
                brands.map((brand) => (
                    <button>
                        {brand}
                    </button>
                ))
            }
        </div>
    )
}

export default Marca
import BusquedaReciente from "../components/BusquedaReciente";
import useFetchProducts from "../lib/useFetchProducts";
import "../styles/busquedasRecientes.css";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

const BusquedasRecientesSeccion = () => {
    const {
        data,
        loading,
        error
    } = useFetchProducts({ search: "tecnologia" });
    return (
        <section id="seccion-busquedas-recientes">
            {
                loading && <Loading />
            }
            {
                error && <Error />
            }
            {
                !loading && !error && (
                    <div id="grilla-busqueda-recientes">
                        <div id="title-busquedas-recientes">
                            <span>Estan son algunos productos que buscaste recientemente</span>
                        </div>
                        {
                            data.products.map((product) => (
                                <BusquedaReciente key={product.id} product={product} />
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
}

export default BusquedasRecientesSeccion
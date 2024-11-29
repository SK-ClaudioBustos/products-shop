import { BusquedaReciente } from "../components";
import { useFetchProducts } from "../lib";
import "../styles/busquedasRecientes.css";
import { Error, Loading } from "../utils";

export const BusquedasRecientesSeccion = () => {
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
                            data.map((product) => (
                                <BusquedaReciente key={product.id} product={product} />
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
}

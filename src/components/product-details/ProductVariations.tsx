import { useState } from "react";
import "../../styles/productVariatons.css";
import { ComponentPictureConfig, ProductDetailsComponent, TitleElement } from "../../types/productDetails";

type VarianteSeleccionadaData = {
    id: string
    thumbnaiId: string
    text: string
}

type ProductVariatonsProps = {
    component: ProductDetailsComponent
    picture_config: ComponentPictureConfig
    variante_seleccionada: VarianteSeleccionadaData
    handleChangeVariation: (idVariation: string) => void
}

const ProductVariations = ({ component, picture_config, variante_seleccionada, handleChangeVariation }: ProductVariatonsProps) => {
    const [varianteSeleccionada, setVarianteSeleccionada] = useState<VarianteSeleccionadaData>(variante_seleccionada);
    const handleChangeVariant = (variante: VarianteSeleccionadaData) => {
        setVarianteSeleccionada(variante);
        handleChangeVariation(variante.id);
    }
    return component.pickers && component.pickers[0].products.length > 1
        ? (
            <section id="variations-section">
                <div className="variation-label-selected">
                    {
                        component.title &&
                        (<h3>{(component.title as TitleElement).text}</h3>)
                    }
                    <span>
                        Color: <b>{` ${varianteSeleccionada.text}`}</b>
                    </span>
                </div>
                <div id="variation-container">
                    {
                        component.pickers[0].products.map((variante) => {
                            const IMG_PATH = picture_config.template_thumbnail?.replace("{id}", variante.picture?.id)
                            return (
                                <div className="variation-item" key={variante.id} aria-label={variante.label.accessibility_text}>
                                    <img
                                        className={varianteSeleccionada.thumbnaiId === variante.picture?.id
                                            ? "mini-image mini-image-selected"
                                            : "mini-image"}
                                        onClick={() => handleChangeVariant({
                                            id: variante.id,
                                            thumbnaiId: variante.picture?.id,
                                            text: variante.label.text
                                        })}
                                        src={IMG_PATH}
                                        alt={variante.label.text}
                                        title={variante.label.text} />
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        ) : null;
}

export default ProductVariations
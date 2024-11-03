import { useState } from "react";
import "../../styles/gallery.css";
import { ComponentPictureConfig, Picture, ProductDetailsComponent } from "../../types/productDetails";

interface GalleryProps {
  component: ProductDetailsComponent
  picture_config: ComponentPictureConfig
  first_picture: Picture | undefined
}

const Gallery = ({ component, picture_config, first_picture }: GalleryProps) => {
  const [imageOnFocus, setImageOnFocus] = useState<Picture | undefined>(first_picture);
  return (
    <section className="gallery-container" aria-label={component.accessibility_text}>
      {
        (component?.pictures && component.pictures?.length > 1) && (
          <div id="images-gallery">
            <div>
              {
                component.pictures.map((picture: Picture) => {
                  const IMG_URL = picture_config.template_thumbnail.replace("{id}", picture.id);
                  return (
                    <img
                      className={imageOnFocus?.id === picture.id ? "mini-image mini-image-selected" : "mini-image"}
                      key={picture.id}
                      role="button"
                      onClick={() => setImageOnFocus(picture)} src={IMG_URL}
                      alt={picture.alt}
                      width={picture.width}
                      height={picture.height} />
                  )
                })
              }
            </div>
          </div>
        )
      }

      <div className="image-container">
        {
          imageOnFocus && (
            <img
              src={picture_config.template.replace("{id}", imageOnFocus.id)}
              alt={imageOnFocus.alt}
            />
          )
        }
      </div>
    </section>
  )
}

export default Gallery
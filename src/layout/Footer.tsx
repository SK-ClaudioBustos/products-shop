import "../styles/footer.css";

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-items">
                <div className="footer-item">
                    <span>Redes Sociales</span>
                    <a href="#" aria-label="Ir a X" className="enlace">X</a>
                    <a href="#" aria-label="Ir a Facebook" className="enlace">Facebook</a>
                    <a href="#" aria-label="Ir a Instagram" className="enlace">Instagram</a>
                    <a href="#" aria-label="Ir a Youtube" className="enlace">Youtube</a>
                </div>

                <div className="footer-item">
                    <span>Acerca De</span>
                    <a href="#" aria-label="Ir a blog" className="enlace">Blog</a>
                    <a href="#" aria-label="Ir a quienes somos" className="enlace">Quienes somos?</a>
                    <a href="#" aria-label="Ir a sustentabilidad" className="enlace">Sustentabilidad</a>
                </div>

                <div className="footer-item">
                    <span>Ayuda</span>
                    <a href="#" aria-label="Ir a accesibilidad" className="enlace">Accesibilidad</a>
                    <a href="#" aria-label="Ir a comprar productos" className="enlace">Comprar</a>
                    <a href="#" aria-label="Ir a vender productos" className="enlace">Vender</a>
                    <a href="#" aria-label="Ir a centro de seguridad" className="enlace">Centro de Seguridad</a>
                </div>
            </div>
            <div id="copy">
                <small>Copyright © 1969-2024 ProductShop S.R.L.</small>
            </div>
        </div>
    )
}

export default Footer
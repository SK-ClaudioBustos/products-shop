import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useProductShopContext } from '../context/ProductsShopContext';
import "../styles/navbar.css";
import { Category } from '../types';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const { category, handleCategorySelected } = useProductShopContext();
    const handleChangeShow = () => {
        setShowNavbar(!showNavbar);
    }
    return (
        <div id="navbar-container">
            <button onClick={handleChangeShow}><MenuIcon fontSize='large'/></button>
            <hr />
            <br />
            {
                showNavbar
                    ? (
                        <div id="navbar-items">
                            <ul>
                                <li className={category === Category.Smartphones ? "navbar-item item-selected" : "navbar-item"} onClick={() => handleCategorySelected(Category.Smartphones)}>
                                    <span>
                                        Celulares
                                    </span>
                                </li>
                                <li className={category === Category.Fragrances ? "navbar-item item-selected" : "navbar-item"} onClick={() => handleCategorySelected(Category.Fragrances)}>
                                    <span>
                                        Belleza
                                    </span>
                                </li>
                                <li className={category === Category.Groceries ? "navbar-item item-selected" : "navbar-item"} onClick={() => handleCategorySelected(Category.Groceries)}>
                                    <span>
                                        Comestibles
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

export default Navbar
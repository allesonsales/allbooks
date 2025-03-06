import { useContext, useEffect, useState } from "react";
import { CombinedContext } from "../../../providers/combined/CombinedProvider";
import './style.css'
import { Link } from "react-router-dom";

const MobileMenu = () => {
    const { 
        cart, setCart, addCart, totalPrice,
        favorite, setFavorite, toggleFavorite,
        list, setList, userName, cep, countFavorite, countCart
    } = useContext(CombinedContext);

    const [mobileOpen, setMobileOpen] = useState(false)

    const toggleMobile = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <div className="mobile-menu" onClick={toggleMobile}>
            {mobileOpen ? (
                <i class="bi bi-menu-up"></i>
            ) : (<i class="bi bi-menu-down"></i>)}
            <ul className="mobile-menu-open" style={{display: mobileOpen ? 'flex' : 'none'}}>
                <li>
                    <Link to="/">
                        <i class="bi bi-house-fill"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/favoritos">
                        <small className="countFavorite">{countFavorite}</small>
                        <i className="bi bi-heart-fill"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/carrinho">
                        <div className="cart">
                            <small className="countCart">{countCart}</small>
                            <i class="bi bi-cart-fill"></i>
                            <span>{Number(totalPrice).toFixed(2).replace('.',',')}</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu
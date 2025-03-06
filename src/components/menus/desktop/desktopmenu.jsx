import { useContext, useEffect, useState } from "react";
import { CombinedContext } from '../../../providers/combined/CombinedProvider';
import './style.css'
import { Link } from "react-router-dom";

const DesktopMenu = () => {
    
    const { 
            cart, setCart, addCart, totalPrice,
            favorite, setFavorite, toggleFavorite,
            list, setList, userName, cep, countFavorite, countCart
        } = useContext(CombinedContext);

    return (
        <div className="desktop-menu">
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/favoritos">
                    <li>
                        Favoritos
                       <small className="countFavorite">{countFavorite}</small>
                    </li>
                </Link>
                <Link to="/carrinho">
                    <li>Carrinho</li>
                </Link>
                <Link to="/carrinho">
                    <li className="cart">
                        <small className="countCart">{countCart}</small>
                        <i class="bi bi-cart-fill"></i>
                        <span>{Number(totalPrice).toFixed(2).replace('.',',')}</span>
                    </li>
                </Link>
            </ul> 
        </div>
    )
}

export default DesktopMenu
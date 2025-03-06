import { useContext, useEffect, useState } from "react";
import { CombinedContext } from "../providers/combined/CombinedProvider";
import './style.css'
import DesktopMenu from "./menus/desktop/desktopmenu";
import MobileMenu from "./menus/mobile/mobile";


const Search = () => {
    const { 
        cart, setCart, addCart, totalPrice,
        favorite, setFavorite, toggleFavorite,
        list, setList, userName, cep, countFavorite, countCart
    } = useContext(CombinedContext);

    const [titles, setTitles] = useState("");
    const [light, setLight] = useState(false);
    const [errorMessage, setErrorMessage]= useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleChange = (event) => {
        setTitles(event.target.value);
    }

    const changeTheme = () => {
        setLight(!light)
        light ? document.body.className ='dark' : document.body.className = 'light'
    }


    useEffect(() => {

        if (!titles) {
            setList([])
            return
        }

        const FetchSearch = () => {
            let key = "AIzaSyAQVbs6bZKU_8olyn_cIOmz2CVl8-S_gT4"
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${titles}&key=${key}`)
            .then(response => response.json())
            .then((data) => {
                setList(data)
                console.log(list)
                if (data.items){
                    setList(data.items);
                    console.log(list)
                } else {
                    setList([]);
                }
            })
            .catch(error => {
                console.error('Erro:' + error)
                setErrorMessage("Erro")
            });
        }

        FetchSearch();
    },[titles, setList])

    return (
        <>
        <div className="searchContainer">
            <div className="left-side">
                <div className="logoImg"></div>
                <div className="userContent">
                    <span>Olá <span className="userName">{userName}</span> </span>
                    <small>{cep}</small>
                </div>
            </div>
            <form>
                <input type="text" placeholder="Buscar livro..." onChange={handleChange} value={titles}/>
            </form>
            <nav>
                <DesktopMenu />
                <MobileMenu />
            </nav>
            <div className="toggle" onClick={changeTheme} style={{ flexDirection: light ? 'row' : 'row-reverse'}}>
                <div className="icon-theme">
                    {light ? <i class="bi bi-brightness-high"></i> : <i class="bi bi-moon-fill"></i>}
                </div>
            </div>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        </>
    )
}

export default Search
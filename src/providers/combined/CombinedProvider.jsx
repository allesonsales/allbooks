import { createContext, useState } from "react";

export const CombinedContext = createContext();

const CombinedProvider = ({ children }) => {
    const [cart, setCart] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [favorite, setFavorite] = useState({});
    const [list, setList] = useState([]);
    const [userName, setUsername] = useState("");
    const [cep, setCep] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    const [modalBookOpen, setModalBookOpen] = useState(false);
    const [inHome, setInHome] = useState(false);
    const [countFavorite, setCountFavorite] = useState(0);
    const [countCart, setCountCart] = useState(0);
    const [buy, setBuy] = useState(false);

    const buying = () => {
        setBuy(true);
    };

    const reset = () => {
        setBuy(false);
    };

    const openBook = (book) => {
        setSelectedBook(book);
        setModalBookOpen(true);
    };

    const closeBook = () => {
        setModalBookOpen(false);
        setSelectedBook(null);
    };

    const handleName = (event) => {
        setUsername(event.target.value);
    };

    const handleCep = (event) => {
        setCep(event.target.value);
    };

    const addCart = (index) => {
        const price = list[index].saleInfo?.retailPrice?.amount || 0;
        setCart(prevCart => {
            const newCart = { ...prevCart };

            if (newCart[index]) {
                delete newCart[index];
                setTotalPrice(prevTotal => prevTotal - price);
                setCountCart(prevCountCart => prevCountCart - 1);
            } else {
                newCart[index] = { book: list[index], price };
                setTotalPrice(prevTotal => prevTotal + price);
                setCountCart(prevCountCart => prevCountCart + 1);
            };

            return newCart;
        });
    };

    const toggleFavorite = (index) => {
        setFavorite(prevFavorite => {
            const newFavorite = { ...prevFavorite };

            if (newFavorite[index]) {
                delete newFavorite[index];
                setCountFavorite(prevCountFavorite => prevCountFavorite - 1);
            } else {
                newFavorite[index] = true;
                setCountFavorite(prevCountFavorite => prevCountFavorite + 1);
            }

            return newFavorite;
        });
    };

    const removeFavorite = (index) => {
        setFavorite(prevFavorite => {
            const newFavorite = {...prevFavorite};

            if(newFavorite[index]) {
                delete newFavorite[index];
            };

            return newFavorite;
        });
    };

    const removeCart = (index) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };

            if (newCart[index]) {
                const price = newCart[index].price;
                delete newCart[index];
                setTotalPrice(prevTotal => prevTotal - price);
            };

            return newCart;
        });
    };

    return (
        <CombinedContext.Provider value={{
            cart, setCart, addCart, totalPrice,
            favorite, setFavorite, toggleFavorite,
            list, setList, cep, userName, handleName,
            handleCep,removeCart, removeFavorite, 
            selectedBook, modalBookOpen, closeBook, openBook, setInHome, inHome,
            countFavorite, countCart, buy, buying, reset
        }}>
            {children}
        </CombinedContext.Provider>
    );
};

export default CombinedProvider;

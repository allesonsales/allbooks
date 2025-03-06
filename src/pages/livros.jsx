import { useContext } from "react";
import { CombinedContext } from "../providers/combined/CombinedProvider";
import './style.css';

const Livros = () => {
    const { 
        cart, setCart, addCart, totalPrice,
        favorite, setFavorite, toggleFavorite,
        list, setList ,removeCart, openBook
    } = useContext(CombinedContext);

    const handleOpenBook = (book) => {
        openBook(book);
    };


    return (
        <div className="containerbooks">
            {list.map((
                {volumeInfo: {title, authors, description, categories, imageLinks}, 
                 saleInfo }, index) => {
                    const price = saleInfo?.retailPrice?.amount;
                    return (
                        <div key={index} className="boxBook">
                            <div className="boxImg" onClick={() => handleOpenBook(list[index])}>
                                <img src={imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : '/default-thumbnail.png'} alt="" />
                                <div className="categories">
                                    <small>{categories}</small>
                                </div>
                            </div>
                            <div className="boxContent" onClick={() => handleOpenBook(list[index])}>
                                <div className="title-author">
                                    <span className="title">{title}</span> 
                                    <small className="author">{authors}</small>  
                                </div>
                                <p className="description" onClick={() => handleOpenBook(list[index])}>{description}</p>
                                <span className="price">
                                    {price && !isNaN(price) ? `R$ ${price.toFixed(2).replace('.', ',')}` : 'Não Disponível'}
                                </span>
                            </div>
                                <div className="interactive">
                                    <div className="favorite" onClick={() => toggleFavorite(index)}>
                                        {favorite[index] ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                                    </div>
                                    {price && !isNaN(price) ? (
                                        <div className="chart" onClick={() => addCart(index, list)}>
                                            {cart[index] ? <i className="bi bi-cart-check-fill"></i> : <i className="bi bi-cart-plus"></i>}
                                        </div>
                                    ) : ( null )}
                                </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Livros;

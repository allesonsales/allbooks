import { useContext } from "react";
import './style.css'
import { CombinedContext } from "../../providers/combined/CombinedProvider";

const Favoritos = () => {
    const { 
        cart, setCart, addCart, totalPrice,
        favorite, setFavorite, toggleFavorite,
        list, setList, removeFavorite
    } = useContext(CombinedContext);

    const favoriteBooks = list.filter((book, index) => favorite[index]);

    return (
        <div className="containerFavorites">
            {favoriteBooks.length > 0 ? (
                favoriteBooks.map(({ volumeInfo: { title, authors, description, categories, imageLinks }, saleInfo }, index) => {
                    const price = saleInfo?.retailPrice?.amount;
                    return (
                        <div key={index} className="boxBook">
                            <div className="boxImg">
                                <img src={imageLinks?.thumbnail || '/default-thumbnail.png'} alt="" />
                                <div className="categories">
                                    <small>{categories}</small>
                                </div>
                            </div>
                            <div className="boxContent">
                                <div className="title-author">
                                    <span className="title">{title}</span> 
                                    <small className="author">{authors}</small>  
                                </div>
                                <p className="description">{description}</p>
                                <span className="price">
                                    {price && !isNaN(price) ? `R$ ${price.toFixed(2).replace('.', ',')}` : 'Não Disponível'}
                                </span>
                            </div>
                            <div className="interactive">
                                <div className="favorite" onClick={() => removeFavorite(index)}>
                                     <i className="bi bi-heart-fill"></i>
                                </div>
                                {price && !isNaN(price) && (
                                    <div className="chart" onClick={() => addCart(index, list)}>
                                        {cart[index] ? <i className="bi bi-cart-check-fill"></i> : <i className="bi bi-cart-plus"></i>}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="not"> Você não possui favoritos </p>
            )}
        </div>
    );
}

export default Favoritos;

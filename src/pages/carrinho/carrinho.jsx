import { useContext } from "react";
import { CombinedContext } from "../../providers/combined/CombinedProvider";
import './style.css'

const Carrinho = () => {
    const { 
        cart, setCart, addCart, totalPrice,
        favorite, setFavorite, toggleFavorite,
        list, setList,removeCart, buy, buying
    } = useContext(CombinedContext);
    
    const removeItem = (index) => {
        const updateCart = {...cart}
        delete updateCart[index]
        setCart(updateCart)
    }
    
    const cartBooks = Object.keys(cart).map(index => ({
        ...cart[index].book,
        price: cart[index].price 
    }));
    return (
        <section id="cart">
            <div className="containerCart">
                {cartBooks.length > 0 ? (
                    cartBooks.map(({ volumeInfo: { title, authors, description, categories, imageLinks }, price }, index) => (
                        <div key={index} className="boxBook">
                            <div className="boxImg">
                                <img 
                                    src={imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : '/default-thumbnail.png'} 
                                    alt={title || "Imagem do livro"} 
                                />
                            </div>
                            <div className="boxCartContent">
                                <div className="title-author">
                                    <span className="title">{title}</span> 
                                    <small className="author">{authors ? authors.join(', ') : 'Autor desconhecido'}</small>  
                                </div>
                                <div className="price">
                                    <small>R$ {price.toFixed(2).replace('.',",")}</small>
                                    <i class="bi bi-trash" onClick={() => removeCart(index)}></i>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="not">Seu carrinho está vazio :(</p>
                )}
            </div>
            <div className="totalPrice">
                {cartBooks.length > 0 ? <span>Total do Carrinho: {Number(totalPrice).toFixed(2).replace('.',',')}</span> : null}
                {cartBooks.length > 0 ? <button onClick={buying}>Finalizar Compra</button> : null}
            </div>
        </section>
    );
};

export default Carrinho;

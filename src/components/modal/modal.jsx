import { useContext } from "react";
import { CombinedContext } from "../../providers/combined/CombinedProvider";
import './style.css';

const Modal = () => {
    const { selectedBook, modalBookOpen, closeBook, addCart, cart, list } = useContext(CombinedContext);

    if (!modalBookOpen || !selectedBook) return null;

    const price = selectedBook.saleInfo.retailPrice.amount

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="img">
                    <img src={selectedBook.volumeInfo?.imageLinks.thumbnail || '/default-thumbnail.png' } alt={selectedBook.volumeInfo?.title}  />
                </div>
                <div className="contentandButton">
                        <div className="title-author">
                            <h2>{selectedBook.volumeInfo?.title}</h2>
                            <p><strong>Autor:</strong> {selectedBook.volumeInfo?.authors?.join(", ") || "Desconhecido"}</p>
                        </div>
                    <div className="description">
                        <div className="description-text">
                         <p>{selectedBook.volumeInfo?.description}</p>
                        </div>
                        <div className="price">
                            <p><strong>Preço:</strong> {price
                                ? `R$ ${price.toFixed(2).replace('.', ',')}` 
                                : "Não disponível"}</p>
                            <div className="interactive">
                            {price && !isNaN(price) ? (
                                <div className="chart" onClick={() => addCart(list.indexOf(selectedBook))}>
                                    {cart[list.indexOf(selectedBook)] ? <i className="bi bi-cart-check-fill"></i> : <i className="bi bi-cart-plus"></i>}
                                </div>
                            ) : <p></p>}
                        </div>
                    </div>
                    </div>
                    <button onClick={closeBook}>Fechar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

import { useEffect, useState } from "react"
import './style.css'
import { useContext } from "react"
import { CombinedContext } from "../../providers/combined/CombinedProvider"

const HomeModal = () => {
    const [modalOpen, setModalOpen] = useState(true)
    const { 
            cart, setCart, addCart, totalPrice,
            favorite, setFavorite, toggleFavorite,
            list, setList, userName, handleName, handleCep
        } = useContext(CombinedContext);

    const closeModal = () => {
        setModalOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal()
    }

    useEffect(() => {
        setModalOpen(true)
    },[])

    return (
        modalOpen && (
        <div className="background">
            <div className="modalContainer">
                <div className="introText">
                    <h3>Bem vindo ao AllBooks</h3>
                    <p>Seja bem-vindo ao AllBooks, a sua plataforma de livros! Aqui você encontra uma vasta seleção de títulos para explorar, aprender e se apaixonar. Boa leitura!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input type="text" placeholder="Qual é o seu primeiro nome?" onChange={handleName} required />
                    <label>CEP:</label>
                    <input type="text" placeholder="Dite seu CEP?" pattern="\d{8}" title="Digite 8 números"  onChange={handleCep} maxLength="8" required/>
                <button className="closeModal" type="submit">enviar</button>
                </form>
            </div>
        </div>
    )
    )
}

export default HomeModal
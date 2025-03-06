import { useContext } from "react"
import { CombinedContext } from "../../providers/combined/CombinedProvider"
import './style.css'

const ModalCompra = () => {
    const { buy, buying, userName, reset } = useContext(CombinedContext);

    return buy ? (
        <div className="backgroundCompra">
            <div className="modalCompra">
                <i class="bi bi-box2-heart-fill"></i>
                    <span>Parabéns pela compra, {userName}!</span>
                    <p>Logo, seu pedido estará chegando por ai!</p>
                    <button onClick={reset}>Fechar</button>
            </div>
        </div>
    ) : (
        null
    )
}

export default ModalCompra
import { useContext, useEffect, useState } from "react"
import { CombinedContext } from "../../providers/combined/CombinedProvider"
import './style.css'

const CardHome = () => {

    const { inHome, setInHome, list, userName } = useContext(CombinedContext)

    useEffect(() => {
        setInHome(true)
    }, [])

    if (list && list.length > 0) {
        return null
    }

    return inHome ? (
            <div className="cardHome">
                <span>Seja bem-vindo, {userName}!</span>
                <p>Aqui, você pode encontrar qualquer livro que sua mente possa imaginar. Explore um universo infinito de histórias, onde cada título é uma nova aventura. A jornada começa agora!</p>
                <p>Pode começar pesquisando seu livro na barra de pesquisa!</p>
            </div>
    ) : (
        null
    )
}

export default CardHome
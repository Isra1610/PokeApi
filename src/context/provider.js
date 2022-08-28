import { createContext, useState } from "react"

const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [pokemonsList, setPokemonsList] = useState([])

    return (
        <GlobalContext.Provider value={{pokemonsList, setPokemonsList}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
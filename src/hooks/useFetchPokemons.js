import { useContext, useEffect } from "react"
import { apiUrl } from "../utils"
import GlobalContext from '../context/provider' 

export const useFetchPokemons = () => {
    
    const { pokemonsList, setPokemonsList } = useContext(GlobalContext)
   
        const fetchPokemon = async () => {
            const listResponse = await fetch(apiUrl)
            const data = await listResponse.json()
            let list = []
            for(let i = 0; i < data?.results.length; i++){
                const pokemosResponse = await fetch(data.results[i].url)
                const pokemons = await pokemosResponse.json()
                list.push(pokemons)
            }
            setPokemonsList(list)
        }

        useEffect(()=> {
            if(!pokemonsList.length) {
                fetchPokemon()
                // window.onbeforeunload = function() {
                //     localStorage.removeItem('favoritesDB');
                //     return '';
                // };
            }
        })

}
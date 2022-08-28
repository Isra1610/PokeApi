import { CardActionArea, CircularProgress, Grid, Card, CardContent, CardMedia, Typography, Box, Button, Checkbox } from '@mui/material';
import { useContext, useState } from 'react'
import { useFetchPokemons } from '../hooks'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import GlobalContext from '../context/provider'
import { useNavigate } from 'react-router-dom'

const PokeDex = () => {

    const favoritesDB = JSON.parse(localStorage.getItem("favoritesDB"))
    const { pokemonsList, setPokemonsList } = useContext(GlobalContext)
    const [currentPage, setCurrentPage] = useState(0)
    const [favorites, setFavorites] = useState(favoritesDB??[])
    useFetchPokemons()

    const pokemonsPage = () => {
      const pokemonPage = pokemonsList.slice(0, currentPage + 18)
      return pokemonPage
    }

    const navigate = useNavigate()

    const forwardPage = () => {
      setCurrentPage(currentPage + 18)
    }

    const handleFavorites = (e, id) => {
      if(e.target.checked) {
        const favorite = pokemonsList.filter(item => item.id === id)
        favorite[0].check = e.target.checked
        setFavorites([...favorites, favorite[0]])
        setPokemonsList([...pokemonsList, pokemonsList.find(item => item.id === id).check = e.target.checked])
      } else {
        setFavorites(favorites.filter(item => item.id !== id))
        setPokemonsList([...pokemonsList, pokemonsList.find(item => item.id === id).check = e.target.checked])
      }
    }

    const handleFavoritesDB = () => {
      localStorage.setItem("favoritesDB", JSON.stringify(favorites))
    }

    const handleDetails = (id) => {
      navigate(`/details/${id}`)
    }

    handleFavoritesDB()


    // const handleSavedFavorites = () => {
    //   if(favoritesDB?.length){
    //     let data = []
    //     for(let i = 0; i < pokemonsList?.length; i++){
    //       let fetchPokemon = pokemonsList[i]
    //       let favorite = favoritesDB.find(item => item.id === fetchPokemon?.id)
    //       console.log(favorite)
    //         if(favorite){
    //           data.push(favorite)
    //         }else {
    //           data.push(fetchPokemon)
    //         }
    //       }
    //       return data
    //     }
    //     else {
    //       return pokemonsList
    //     }
    // }

    return (
      <Box sx={styles.container}>
        <Typography variant="h1" sx={styles.title}>#pokeDex</Typography>
        <Grid container spacing={2} sx={styles.grid}>
        {pokemonsList.length !== 0 ? pokemonsPage()?.map(pokemon => 
              <Grid item key={pokemon.id} xs={12} sm={4} md={3} xl={2}>
                <Card sx={styles.Card}>
                    <CardActionArea>
                        <CardMedia
                          sx={styles.CardMedia}
                          component="img"
                          image={pokemon?.sprites?.front_default}
                          alt={pokemon?.name}
                        />
                        <CardContent>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={styles.checked}/>} sx={styles.favorite} onChange={e => handleFavorites(e, pokemon.id)} checked={pokemon.check ?? false}/>
                        <Typography gutterBottom variant="h6" component="div" sx={styles.nick} onClick={()=>handleDetails(pokemon?.id)}>
                            {`${pokemon.name} #${pokemon.id}`}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
              </Grid>
            )
         : (
          <Grid container sx={styles.loader}>
            <Grid item>
              <CircularProgress size="70px"/>
            </Grid>
          </Grid>
         )
        }
        </Grid>
        <Box sx={styles.buttonWrapper}>
          <Button sx={styles.forward} onClick={forwardPage} disabled={currentPage===234?true:false}>{currentPage===234?'Fin.':'Cargar Mas...'}</Button>
        </Box>
      </Box>
    )
}

export default PokeDex

const styles = {
  container: {
    maxWidth: '1180px',
    margin: '0 auto',
  },
  title: {
    fontWeight: '900',
    textAlign: 'center',
    margin: '20px 0',
    color: '#18181B',
    fontSize: {xs: '3.5rem', sm: '6rem'}
  },
  Card: {
    minWidth: {xs: 280, sm: 180},
    maxWidth: {xs: 280, sm: 180},
    minHeight: {xs: 230, sm: 210},
    maxHeight: {xs: 230, sm: 210},
    backgroundColor: '#18181B',
    margin: '0 auto',
    position: 'relative',
  },
  loader: {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardMedia: {
    height: {xs: 150, sm: 130},
    objectFit: 'contain',
  },
  nick: {
    fontWeight: 'bold',
    color: '#FFDB21',
    textAlign: {xs: 'center', sm: 'left'},
  },
  grid: {
    margin: '0 auto',
  },
  forward: {
    color: '#18181B',
    fontWeight: '900',
    textTransform: 'none',
    fontSize: '20px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0'
  },
  favorite: {
    color: '#FFDB21',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  checked: {
    color: '#FFDB21',
  },
}
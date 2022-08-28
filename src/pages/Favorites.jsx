import { CardActionArea, Grid, Card, CardContent, CardMedia, Typography, Box, Checkbox } from '@mui/material';
import { useContext, useEffect, useState } from 'react'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import GlobalContext from '../context/provider'

const MyFavorites = () => {
    
    const favoritesDB = JSON.parse(localStorage.getItem("favoritesDB"))
    const [favorites, setFavorites] = useState(favoritesDB)
    const { pokemonsList, setPokemonsList } = useContext(GlobalContext)

    const handleFavorites = (e, id) => {
      if(!e.target.checked) {
        setFavorites(favorites.filter(item => item.id !== id))
        setPokemonsList([...pokemonsList, pokemonsList.find(item => item.id === id).check = e.target.checked])
      }
    }

    const handleFavoritesDB = () => {
      localStorage.setItem("favoritesDB", JSON.stringify(favorites))
    }

    useEffect(()=> {
      handleFavoritesDB()
    },[favorites])

    return (
      <Box sx={styles.container}>
        <Typography variant="h1" sx={styles.title}>#misPokemones</Typography>
        <Grid container spacing={2} sx={styles.grid}>
        {favorites.length !== 0 ? favorites?.map(pokemon => 
              <Grid item key={pokemon.id} xs={12} sm={4} md={3}>
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
                        <Typography gutterBottom variant="h6" component="div" sx={styles.nick}>
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
                <Typography variant="h2" sx={styles.subTitle}>¡Tu lista de favoritos esta vacía!</Typography>
            </Grid>
          </Grid>
         )
        }
        </Grid>
      </Box>
    )
}

export default MyFavorites

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
  subTitle: {
    fontWeight: '900',
    textAlign: 'center',
    margin: '20px 0',
    color: '#18181B',
    fontSize: {xs: '2.5rem', sm: '5rem'}
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
    minHeight: '75vh',
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
    minHeight: '75vh',
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
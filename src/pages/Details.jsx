import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import { useContext, useEffect } from 'react'
import GlobalContext from '../context/provider'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    
    const { pokemonsList } = useContext(GlobalContext)

    const { id } = useParams()

    const navigate = useNavigate()

    const pokemonInfo = pokemonsList[id - 1]

    useEffect(()=> {
      validateId()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pokemonsList])

    const validateId = () => {
      if(!pokemonsList?.length){
        navigate('/')
      }
    }

    const statsEs = {
      hp: 'Vida',
      attack: 'Ataque',
      defense: 'Defensa',
      'special-attack': 'Ataque Especial',
      'special-defense': 'Defensa Especial',
      speed: 'Velocidad' 
    }

    return (
      <Box sx={styles.container}>
        <Typography variant="h1" sx={styles.title}>{`#${pokemonInfo?.name}`}</Typography>
        <Box sx={styles.box}>
          <Box sx={styles.imageBox}>
            <Card sx={styles.Card}>
              <CardMedia
                sx={styles.CardMedia}
                component="img"
                image={pokemonInfo?.sprites?.front_default}
                alt={pokemonInfo?.name}
              />
            </Card>
          </Box>
          <Box sx={styles.statsBox}>
              <Typography variant="h6" sx={styles.subTitle}>Estadísticas</Typography>
            <Grid container spacing={2}>
                {pokemonInfo?.stats?.map(item => 
                  <Grid item key={item.stat.name} xs={12} sm={4}>
                    <Typography gutterBottom variant="h6" component="div" sx={styles.nick}>
                        {`${statsEs[item.stat.name]}: ${item.base_stat}`}
                    </Typography>
                  </Grid>
                )}
                <Grid item  xs={12} sm={4}><Typography gutterBottom variant="h6" component="div" sx={styles.nick}>{`Peso: ${pokemonInfo?.weight/10} Kg`}</Typography></Grid>
                <Grid item  xs={12} sm={4}><Typography gutterBottom variant="h6" component="div" sx={styles.nick}>{`Altura: ${pokemonInfo?.height/10} Mts`}</Typography></Grid>
            </Grid>
            <Typography variant="h6" sx={styles.subTitle}>Habilidades</Typography>
            <Grid container spacing={2}>
              {pokemonInfo?.abilities?.map(item => 
                <Grid item key={item.ability.name} xs={12} sm={4}>
                  <Typography gutterBottom variant="h6" component="div" sx={styles.nick}>
                      - {item.ability.name}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Typography variant="h6" sx={styles.subTitle}>Tipos</Typography>
            <Grid container spacing={2}>
              {pokemonInfo?.types?.map(item => 
                <Grid item key={item.type.name} xs={12} sm={4}>
                  <Typography gutterBottom variant="h6" component="div" sx={styles.nick}>
                      - {item.type.name}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
    )
}

export default Details

const styles = {
  container: {
    maxWidth: '1180px',
    margin: '0 auto',
  },
  title: {
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'capitalize',
    margin: '20px 0',
    color: '#18181B',
    fontSize: {xs: '2.5rem', sm: '4rem', md: '6rem'}
  },
  subTitle: {
    fontWeight: '900',
    textAlign: 'left',
    margin: '20px 0',
    color: '#18181B',
    fontSize: {xs: '1.5rem', sm: '2rem'}
  },
  Card: {
    minWidth: {xs: 280, sm: 180},
    // maxWidth: {xs: 280, sm: 180},
    minHeight: {xs: 230, sm: 210},
    // maxHeight: {xs: 230, sm: 210},
    backgroundColor: '#18181B',
    margin: '0 auto',
    position: 'relative',
  },
  imageBox:{
    width: '30%',
  },
  statsBox: {
    width: '60%'
  },
  loader: {
    minHeight: '75vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardMedia: {
    height: {xs: 150, sm: 130, md:500},
    objectFit: 'contain',
  },
  nick: {
    fontWeight: 'bold',
    color: '#18181B',
    textAlign: {xs: 'center', sm: 'left'},
  },
  grid: {
    margin: '0 auto',
    minHeight: '75vh',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}
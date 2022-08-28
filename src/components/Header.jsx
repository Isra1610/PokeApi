import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const Header = () => {

    const navigate = useNavigate()

    const backHome = () => {
        navigate('/')
    }

    const goFavorites = () => {
        navigate('/favorites')
    }

    return (
        <Box>
            <AppBar position="static" sx={styles.appBar}>
                <Toolbar sx={styles.toolBar}>
                    <Typography variant="h6" component="div" sx={styles.title} onClick={backHome}>
                        PokeDex
                    </Typography>
                    <Button sx={styles.favorites} onClick={goFavorites}>
                        Favoritos
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const styles = {
    title: {
        fontWeight: '900',
        color: '#FFDB21',
        cursor: 'pointer',
    },
    appBar: {
        backgroundColor: '#18181B',
    },
    favorites: {
        color: '#FFDB21',
        fontWeight: '900',
        textTransform: 'none',
        fontSize: '20px'
    },
    toolBar: {
        justifyContent: 'space-between',
    }
}

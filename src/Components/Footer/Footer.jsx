// imports
import React from 'react'
import { Box, Link, Button, Typography, Fab } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import BtnContacto from '../BtnContacto/BtnContacto'
import '../../css/bloque.css'

function Footer() {
    // return information
    return (
        <Box className='Bloque footer rojo' sx={{ width: '100%' }}>
            {/* the other 2 web site them have */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h4">Nuestras páginas</Typography>
                <Link href="https://fedem.es/" target="_blank" underline="none">FEDEM - Empresas de Mudanza y Guardamuebles</Link>
                <Link href="https://fedem.online/" target="_blank" underline="none">Fedem - Federación Española de Empresas de Mudanzas</Link>
            </Box>
            {/*  the information of a web and a button to contact */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h4">Información</Typography>
                <Button variant="contained">
                    <Link href="https://fedem.es/noticias-consejos-mudanzas/" target="_blank" underline="none" sx={{ color: 'white' }}>Noticias</Link>
                </Button>
                <link rel="stylesheet" href="" />
                <BtnContacto />
            </Box>
            {/* social media */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h4">redes sociales</Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Link href="https://www.facebook.com/FEDEMmudanzas/" target="_blank">
                        <Fab>
                            <FacebookIcon />
                        </Fab>
                    </Link>
                    <Link href="https://twitter.com/Fedemudanzas" target="_blank">
                        <Fab>
                            <TwitterIcon />
                        </Fab>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
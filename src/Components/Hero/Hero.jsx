// imports
import React from 'react'
import { Box } from '@mui/material'
import { useWindowSize } from '../../hook'
import '../../css/hero.css'
import { BtnComprar, BtnRedirectPatrocinar } from "../"
import hero1 from '../../assets/hero.png'
const Hero = () => {
    // know the window size
    const windowSize = useWindowSize()
    return (
        // show the hero page
        <Box className='hero' sx={{ height: windowSize.height - 2 * 140 }}>
            <Box sx={{ backgroundImage: `url(${hero1})` }} className='imgContainer'></Box>
            <h1 style={{ color: 'white', fontSize: '2.5rem' }}>FEDEM, Federación Española de Empresas de Mudanzas y Guardamuebles</h1>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <BtnComprar />
                <BtnRedirectPatrocinar />
            </Box>
        </Box>
    )
}

export default Hero
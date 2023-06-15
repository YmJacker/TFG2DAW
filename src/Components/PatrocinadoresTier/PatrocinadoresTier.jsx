// imports
import React from 'react'
import { Box } from '@mui/material'
import { CaracteristicasPatrocinador, BannerPatrocinio, BtnContacto } from "../"
import { useWindowSize } from '../../hook'

const PatrocinadoresTier = () => {
    // windowsize
    const windowSize = useWindowSize()
    return (
        <Box sx={{ minHeight: windowSize.height - 2 * 140, height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
            <BannerPatrocinio />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <CaracteristicasPatrocinador />
                <BtnContacto />
            </Box>
        </Box>
    )
}

export default PatrocinadoresTier
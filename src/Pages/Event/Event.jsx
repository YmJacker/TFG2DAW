// The imports from react, Components folder, css and Material Ui
import React from 'react'
import { BtnNuestrosPatrocinadores, Footer, Texto, TimeLine, BtnActividades, BtnComida, BtnRedirectPatrocinar } from "../../Components"
import '../../css/bloque.css'
import { Box } from '@mui/material'

// The Component
const Event = () => {
    return (
        <Box className='container'>
            <BtnNuestrosPatrocinadores />
            <Texto />
            <TimeLine />
            <BtnActividades />
            <BtnComida />
            <Box className="Bloque simple" sx={{ display: 'flex', flexDirection: 'column' }}>
                <BtnRedirectPatrocinar />
            </Box>
            <BtnNuestrosPatrocinadores />
            <Footer />
        </Box>
    )
}

export default Event
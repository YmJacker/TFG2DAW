// imports
import React from 'react'
import { Box, Typography } from '@mui/material'
import '../../css/bloque.css'
// return text
const Texto = () => {
    return (
        <Box className='Bloque texto'>
            <Typography variant='h3'>
                Objetivos
            </Typography>
            <Typography variant='h5'>
                Lograr una mayor unidad en el sector de las mudanzas, la asociación de Galicia junto a FEDEM buscan un congreso para unir y unificar el sector, Con la unión de todas las empresas y las asociaciones obtendremos una mayor visibilidad del sector ante las instituciones(obtener una mayor representatividad), además conseguiremos mayor visibilidad entre clientes y proveedores.
            </Typography>
        </Box>
    )
}

export default Texto
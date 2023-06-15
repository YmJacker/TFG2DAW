// the imports from react, Components folder, api get and Material Ui
import React, { useState, useEffect } from 'react'
import { CarouselLogos, PatrocinadoresTier, Hero } from "../../Components"
import { Patrocinadores } from '../../api/Get'
import { Box } from '@mui/material'

// The component, recibe 'Principal' as prop
const Main = ({ Principal }) => {
    // the variables
    const [logos, cambiarLogos] = useState([])
    const [mitad, setMitad] = useState(1)
    // the hook useEffect, works like windown.Onload
    useEffect(() => {
        // arrow function to get the logos
        const obtenerLogos = async () => {
            // the json in the variable
            const res = await Patrocinadores()
            const arr = []
            // filter the logo and the name
            res.forEach((element) => {
                arr.push({ logo: element.empresaCif.logo, nombre: element.empresaCif.nombre })
            })
            // set the variables
            cambiarLogos(arr)
            setMitad(arr.length / 2)
        }
        obtenerLogos()
    }, [])
    // return the component
    return (
        <Box sx={{ width: '100vw', height: '100%' }}>
            <CarouselLogos logos={logos} start={1} />
            {Principal ? <Hero /> : <PatrocinadoresTier />}
            <CarouselLogos logos={logos} start={mitad} />
        </Box>
    )
}

export default Main
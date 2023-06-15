// imports
import React from 'react'
import Carousel from "nuka-carousel"
import { Box } from '@mui/material'
import '../../css/logos.css'
import { useWindowSize } from '../../hook'
// the props
const CarouselLogos = ({ logos, start }) => {
    // know the window size to show how much logos
    const windowSize = useWindowSize()
    // show the carrousel
    return (
        <Box sx={{ height: '140px' }}>
            <Carousel
                slidesToShow={windowSize.width / 140}
                slideIndex={start}
                width="100vw"
                wrapAround={true}
                autoplay={true}
                transitionMode="scroll"
            >
                {
                    logos.map((element, index) => (
                        <img src={element.logo} alt={element.nombre} key={'logo' + index} className='loguitos' />)
                    )
                }
            </Carousel>
        </Box>

    )
}

export default CarouselLogos
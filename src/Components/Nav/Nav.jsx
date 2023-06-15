// the imports from react, Components folder, css and Material Ui
import React, { useState } from 'react'
import { BtnEvent, BtnHome, BtnSession, BtnLogin, NavMobile } from '../'
import { useWindowSize } from '../../hook'
import '../../css/nav.css'
import { Box, Fab } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const Nav = ({ onTemaClick, iniciada }) => {
    // the winndow size
    const WindowSize = useWindowSize()
    // provide to the web the way to drak ad light mode
    const [temaOscuro, setTemaOscuro] = useState(false)
    const temaSupongo = () => {
        setTemaOscuro(!temaOscuro)
        onTemaClick(!temaOscuro)
    }

    return (
        <>
            {
                // the ternary for mobile nav or not
                (WindowSize.width > 700 && WindowSize.height > 600)
                    ? <Box
                        className='navegador'
                        sx={{
                            '& > :not(style)': { m: 1 },
                            backgroundColor: temaOscuro ? 'primary.dark' : 'primary.light'
                        }}
                    >
                        <BtnHome />
                        <BtnEvent />
                        {/* if session is active or not */}
                        {iniciada.correo === undefined ? <BtnSession /> : <BtnLogin />}
                        <Fab onClick={temaSupongo} >
                            {temaOscuro ? <DarkModeIcon /> : <LightModeIcon />}
                        </Fab>
                    </Box>
                    // the mobile nav
                    : <NavMobile onTemaClick={onTemaClick} iniciada={iniciada} />
            }
        </>
    )
}

export default Nav
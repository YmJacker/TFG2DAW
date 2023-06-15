
// imports
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import EventIcon from '@mui/icons-material/Event'
import PersonIcon from '@mui/icons-material/Person'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AccessibilityIcon from '@mui/icons-material/Accessibility'

// the funcicion with props
const NavMobile = ({ onTemaClick, iniciada }) => {
    // set the open of the dial
    const [open, setOpen] = useState(false)
    // react router redirect
    const navigate = useNavigate()
    // the theme mode
    const [temaOscuro, setTemaOscuro] = useState(false)
    const temaSupongo = () => {
        setTemaOscuro(!temaOscuro)
        onTemaClick(!temaOscuro)
    }
    // the open an close function
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    // redirect
    const handleNavigation = (route) => {
        navigate(route)
        handleClose()
    }

    return (
        <Box sx={{ position: 'fixed', bottom: '1rem', left: '1rem' }}>
            {/* the dial button */}
            <SpeedDial
                ariaLabel="Navigation"
                icon={<SpeedDialIcon />}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                sx={{ zIndex: "10000" }}
            >
                {/* the intermal actions */}
                <SpeedDialAction
                    icon={<HomeIcon />}
                    tooltipTitle="Home"
                    onClick={() => handleNavigation('/')}
                    sx={{ zIndex: "10" }}
                />
                <SpeedDialAction
                    icon={<EventIcon />}
                    tooltipTitle="Evento"
                    onClick={() => handleNavigation('/Evento')}
                    sx={{ zIndex: "10" }}
                />
                {/* if session is active or not */}
                {
                    iniciada.correo === undefined
                        ? <SpeedDialAction
                            icon={<PersonIcon />}
                            tooltipTitle="Iniciar Sesión"
                            onClick={() => handleNavigation('/IniciarSesion')}
                            sx={{ zIndex: "10" }}
                        />
                        : <SpeedDialAction
                            icon={<AccessibilityIcon />}
                            tooltipTitle="Perfil"
                            onClick={() => handleNavigation('/Login')}
                            sx={{ zIndex: "10" }}
                        />
                }
                {/* the theme mode button */}
                <SpeedDialAction
                    icon={temaOscuro ? <DarkModeIcon /> : <LightModeIcon />}
                    tooltipTitle={temaOscuro ? "Modo Oscuro" : "Modo Claro"}
                    onClick={temaSupongo}
                    sx={{ zIndex: "10" }}
                />
            </SpeedDial>
        </Box>
    )
}


export default NavMobile
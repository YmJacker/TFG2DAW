

// the imports from react, react routing, Components folder, Pages folder and Material Ui
import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Nav } from './Components'
import { Home, Event, Session, Patrocinar, PerfilUsuarioLog } from './Pages'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'

// the Error const for not existant page
const Error = () => <h1>Página Inexistente</h1>

const App = () => {
    // can store(like getters and setters) the theme color (light or dark)
    const [temaOscuro, setTemaOscuro] = useState(false)
    const [session, setSession] = useState({})
    // the arrow function to get the color theme
    const handleTemaClick = (nuevoTema) => {
        setTemaOscuro(nuevoTema)
    }

    // I create the Theme here, with the colors
    const Theme = createTheme({
        palette: {
            primary: {
                light: '#ea5b53',
                main: '#c0362c',
                dark: '#b02d21',
                contrastText: '#fff',
            },
            secondary: {
                light: '#f1f1f1',
                main: '#e9e9e9',
                dark: '#d9d9d9',
                contrastText: '#000',
            },
            // using an setting the color by the option of darkmode
            mode: temaOscuro ? 'dark' : 'light',
        },
    })

    return (
        // use the Theme I create
        <ThemeProvider theme={Theme}>
            {/* for the backgroud color with the Theme by MUI */}
            <CssBaseline />
            {/* container */}
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {/* the routing for every page */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Evento' element={<Event />} />
                    <Route path='/IniciarSesion' element={<Session activaSesion={setSession} />} />
                    <Route path='/Login' element={<PerfilUsuarioLog Sesion={session} setSession={setSession} />} />
                    <Route path='/Patrocinar' element={<Patrocinar />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Box>

            {/* nav always on */}
            <Nav onTemaClick={handleTemaClick} iniciada={session} />
        </ThemeProvider>
    )
}

export default App
// import
import React, { useState, useEffect } from 'react'
import { Box, TextField, FormControlLabel, Checkbox, Button, Snackbar, Alert } from '@mui/material'
import '../../css/session.css'
import { Asistentes } from '../../api/Get/Asistentes/Asistentes'
import { useNavigate } from 'react-router-dom'
// props
const LogIn = ({ activaSesion }) => {
    // variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberSession, setRememberSession] = useState(false)
    const [mail, setMail] = useState('')
    const [contra, setContra] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false)
    // redirect
    const navigate = useNavigate()
    // close the alert
    const handleSnackbarClose = () => {
        setOpenSnackbar(false)
    }
    // setters for vatiables
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleRememberSessionChange = (event) => {
        setRememberSession(event.target.checked)
    }
    // validation of user
    const iniciarSesion = (event) => {
        event && event.preventDefault()
        if (mail.includes(email)) {
            const posi = mail.indexOf(email)
            if (contra[posi] === password) {
                sessionStorage.setItem('recordar', !!rememberSession)
                if (rememberSession) {
                    // saving the session if all is correct
                    sessionStorage.setItem('emailFedem', email)
                    sessionStorage.setItem('pasFedem', password)
                } else {
                    sessionStorage.clear()
                }
                activaSesion({ "correo": email, "contrasenya": password })
                navigate('/Login')
            } else {
                setOpenSnackbar(true)
            }
        } else {
            setOpenSnackbar(true)
        }
    }
    // get the users
    useEffect(() => {
        const render = async () => {
            const ail = []
            const ssword = []
            const aing = await Asistentes()
            aing.forEach((element) => {
                ail.push(element.correo)
                ssword.push(element.contrasenya)
            })
            setContra(ssword)
            setMail(ail)
        }
        render()
        // if local session is active load them
        if (!!sessionStorage.getItem('recordar')) {
            setRememberSession(!!sessionStorage.getItem('recordar'))
            setEmail(sessionStorage.getItem('emailFedem'))
            setPassword(sessionStorage.getItem('pasFedem'))
            iniciarSesion()
        }
    }, [])

    return (
        <Box sx={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <form id='inicairSesionPorfaVorFunciona' onSubmit={iniciarSesion} className='iniciarSesion'>
                {/* user email */}
                <TextField
                    required
                    id="Email-Sesion"
                    label="Email"
                    placeholder='Ej: ejemplo@ejemplo.ej'
                    value={email}
                    onChange={handleEmailChange}
                />
                {/* password */}
                <TextField
                    required
                    id="password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {/* save the information in local storage session */}
                <FormControlLabel
                    control={<Checkbox checked={rememberSession} onChange={handleRememberSessionChange} />}
                    label="Recordar sesión"
                    checked={rememberSession}
                />
                <Button variant="contained" type='submit'>Iniciar Sesión</Button>
            </form>
            {/* alert if is something wrong */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
            >
                <Alert severity="error">No se pudo iniciar</Alert>
            </Snackbar>
        </Box>
    )
}

export default LogIn
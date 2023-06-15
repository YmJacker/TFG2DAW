// imports
import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Fab, TextField } from '@mui/material'
import FemaleIcon from '@mui/icons-material/Female'
import MaleIcon from '@mui/icons-material/Male'
import { Asistentes } from '../../api/Get'
import { useNavigate } from 'react-router-dom'
// props
const Perfil = ({ Sesion, setSession }) => {
    // variables
    const [usuario, setUsuario] = useState({})
    const navigate = useNavigate()
    const [editar, setEditar] = useState(false)
    // redirect
    const handleLogout = () => {
        setSession({})
        sessionStorage.clear()
        navigate('/')
    }
    // get the information
    useEffect(() => {
        const render = async () => {
            const todos = await Asistentes()
            const objetoEncontrado = todos.find(item => item.correo === Sesion.correo)
            setUsuario(objetoEncontrado)
        }
        render()
    }, [])

    return (
        // show the profile like a form
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '1rem' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 5 }}>
                <Avatar alt="Profile Picture" src={usuario.imagen} sx={{ width: 200, height: 200, marginLeft: '1rem' }} />
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="Nombreuser"
                        label="Nombre"
                        value={usuario.nombre == '' ? '' : `${usuario.nombre} `}
                    />
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="Apellidoeuser"
                        label="Apellido"
                        value={usuario.apellido == '' ? '' : `${usuario.apellido} `}
                    />
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="Usuario"
                        label="Usuario"
                        value={usuario.nombreUsuario == '' ? '' : `@${usuario.nombreUsuario}`}
                    />
                </Box>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>

                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                    <Box>
                        <Fab sx={{ zIndex: "-1" }}>{usuario.genero === 'M' ? <MaleIcon /> : <FemaleIcon />}</Fab>
                    </Box>
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="Correo"
                        label="Correo"
                        value={usuario.correo == '' ? '' : `${usuario.correo} `}
                    />
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="DNI"
                        label="DNI"
                        value={usuario.dni == null ? '' : `${usuario.dni} `}
                    />
                </Box>

                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="provincia"
                        label="provincia"
                        value={usuario.provincia == null ? '' : `${usuario.provincia} `}
                    />
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="codigoPostal"
                        label="codigoPostal"
                        value={usuario.codigoPostal == '' ? '' : `${usuario.codigoPostal} `}
                    />
                    <TextField
                        disabled={!editar}
                        fullWidth
                        id="telefono"
                        label="telefono"
                        value={usuario.telefono == null ? '' : `${usuario.telefono} `}
                    />
                </Box>

                <TextField
                    disabled={!editar}
                    id="outlined-multiline-static"
                    label="Biografía"
                    multiline
                    fullWidth
                    rows={2}
                    value={usuario.biografia == '' ? '' : `${usuario.biografia} `}
                />
            </Box>

            <Button variant="contained" onClick={handleLogout} mt={2}>
                Cerrar sesión
            </Button>


        </Box>
    )
}

export default Perfil
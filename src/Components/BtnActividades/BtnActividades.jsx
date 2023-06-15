// imports
import React, { useState, useEffect } from 'react'
import { Typography, Box, Paper, Dialog, DialogContent, DialogTitle } from '@mui/material'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import '../../css/bloque.css'
import { Actividades } from '../../api/Get'

function BtnActividades() {
    // the variables
    const [allInfo, setAllInfo] = useState([])
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    // get the information from the api
    useEffect(() => {
        const getActivities = async () => {
            const info = await Actividades()
            setAllInfo(info)
        }
        getActivities()
    }, [])

    return (
        <>
            {/* return a Box button to show the dialog */}
            <Box className="Bloque simple" onClick={handleClickOpen} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h3">Actividades</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '2rem', width: '2rem' }}>
                    <LocalActivityIcon />
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose} aria-labelledby="patros" aria-describedby="patrocinadores" maxWidth="md" fullWidth={true}>
                <DialogTitle id="alert-dialog-title">Las actividades</DialogTitle>
                <DialogContent>
                    {/* the information for each one */}
                    {allInfo.length > 0 &&
                        allInfo.map((elem) => (
                            <Paper key={elem.id} sx={{ height: '100%', width: '95%', margin: '1rem' }}>
                                <Box sx={{ display: 'grid', width: '100%', padding: '1rem', gap: '1rem' }}>
                                    <Box sx={{ height: 'auto', width: '200px' }}>
                                        <img src={elem.imagen} alt={elem.nombre} width="100px" />
                                    </Box>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {elem.nombre}
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom>
                                        Descripción: {elem.descripcion}
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom>
                                        Hora de inicio: {elem.horaInicio}
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom>
                                        Hora de fin: {elem.horaFin}
                                    </Typography>
                                </Box>
                            </Paper>
                        ))}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BtnActividades

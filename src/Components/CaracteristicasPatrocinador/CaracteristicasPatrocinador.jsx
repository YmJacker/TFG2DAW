// import
import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import TablaComparativa from '../TablaComparativa/TablaComparativa'
const CaracteristicasPatrocinador = () => {
    // open the dialog
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Caracteristicas
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Información comparativa de los paquetes de patrocinio"}
                </DialogTitle>
                <DialogContent>
                    {/* table of sponsors */}
                    <TablaComparativa />
                </DialogContent>
                {/* button */}
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CaracteristicasPatrocinador
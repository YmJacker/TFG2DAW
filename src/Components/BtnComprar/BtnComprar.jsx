// imports
import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import {PhaseCompra} from '../'

const BtnComprar = () => {
    // open or not the dialof
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            {/* the button */}
            <Button variant="contained" onClick={handleClickOpen}>Comprar entrada</Button>
            {/* the dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Proceso de compra de la entrada"}
                </DialogTitle>
                <DialogContent>
                    {/* the content is the PhaseCompra */}
                    <PhaseCompra cerrar={handleClose} tipoCompra='Entrada' />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BtnComprar
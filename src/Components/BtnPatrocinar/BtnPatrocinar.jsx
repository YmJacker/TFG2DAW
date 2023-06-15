

import React, {useState} from 'react'
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'

import PhaseCompra from '../PhaseCompra/PhaseCompra'

const BtnPatrocinar = () => {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button variant='contained' size="big" onClick={handleClickOpen}>Patrocinar</Button>

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
                    <PhaseCompra cerrar={handleClose} tipoCompra='Patrocinar' />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BtnPatrocinar
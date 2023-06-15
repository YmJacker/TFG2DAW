// imports
import React, { useState } from 'react'
import { TextField, Button, Box, Snackbar, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { Send } from '@mui/icons-material'

const BtnContacto = () => {
    // the information and dialog open
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }
    //  the submit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ 'nombre': name, 'email': email, 'mensaje': message })
        // clear the information
        setName('')
        setEmail('')
        setMessage('')
        // open the alert
        setOpenSnackbar(true)
        // auto close in 7s
        setTimeout(() => {
            handleClose()
        }, 7000)

    }
    // close the alert
    const handleSnackbarClose = () => {
        setOpenSnackbar(false)
    }

    return (
        <>
            {/* the button */}
            <Button variant="contained" onClick={handleClickOpen}>Contacto</Button>
            {/* the dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
                fullWidth={true}
            >
                {/* the title */}
                <DialogTitle id="alert-dialog-title">
                    Esciba su mensaje
                </DialogTitle>
                <DialogContent>
                    {/* from data */}
                    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                fullWidth
                                value={name}
                                onChange={handleNameChange}
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                fullWidth
                                value={email}
                                onChange={handleEmailChange}
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Message"
                                fullWidth
                                multiline
                                rows={4}
                                value={message}
                                onChange={handleMessageChange}
                                required
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={<Send />}
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Enviar
                            </Button>
                        </form>
                        {/* the alert */}
                        <Snackbar
                            open={openSnackbar}
                            autoHideDuration={3000}
                            onClose={handleSnackbarClose}
                            message="Mensaje enviado!"
                        />
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}


export default BtnContacto
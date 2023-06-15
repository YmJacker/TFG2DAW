// imports
import React, { useState, useEffect } from 'react'
import { Typography, Link, Box, Paper, Dialog, DialogContent, DialogTitle } from '@mui/material'
import '../../css/bloque.css'
import { Empresas } from '../../api/Get'

const BtnNuestrosPatrocinadores = () => {
    // the variables
    const [allInfo, setAllInfo] = useState([])
    const [open, setOpen] = useState(false)
    const [img, setImg] = useState('https://fedem.es/wp-content/uploads/2017/01/cropped-fedem-mudanzas-logo-web-retina-ok.png')
    // the dialog, open or close
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    // get a random logo from one of our cooperative company
    const cambiarLogo = () => {
        const randnum = getRandomNumber(0, allInfo.length)
        setImg(allInfo[randnum].logo)
    }
    // random number
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    // get the information from the api
    useEffect(() => {
        const getCompany = async () => {
            const info = await Empresas()
            setAllInfo(info)
        }
        getCompany()
    }, [])
    // update the compony logo
    useEffect(() => {
        const intervalId = setInterval(() => {
            cambiarLogo()
        }, 3000)

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalId)
    }, [allInfo])

    return (
        <>
            {/* the cooperative company logos */}
            <Box className='Bloque simple' onClick={handleClickOpen} >
                <Box
                    sx={{
                        height: '90%',
                        width: '90%',
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundClip: 'content-box',
                    }}
                />
            </Box>
            {/* the information from the company */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="patros"
                aria-describedby="patrocinadores"
                maxWidth="sm"
                fullWidth={true}
            >
                {/* the title */}
                <DialogTitle id="alert-dialog-title">
                    Nuestros colaboradores
                </DialogTitle>
                {/* the content */}
                <DialogContent>
                    {
                        // for every one of them show
                        allInfo.length > 1 && allInfo.map((elem, index) => (
                            <Paper
                                key={'empresas' + index}
                                sx={{
                                    height: '100%',
                                    width: '95%',
                                    margin: '1rem',
                                }}
                            >
                                {/* show thr informatio, logos, name, direction, cif and link to their own website */}
                                <Box sx={{ display: 'grid', width: '100%', padding: '1rem', gap: '1rem' }}>
                                    <Box sx={{ height: 'auto', width: '200px' }}>
                                        <img src={elem.logo} alt={elem.nombre} width='100px' />
                                    </Box>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {elem.nombre}
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom>
                                        Dirección: {elem.direccion}
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom>
                                        CIF: {elem.cif}
                                    </Typography>
                                    <Link href={elem.enlace} target="_blank" rel="noopener">
                                        Ir al sitio web
                                    </Link>
                                </Box>
                            </Paper>
                        ))
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BtnNuestrosPatrocinadores
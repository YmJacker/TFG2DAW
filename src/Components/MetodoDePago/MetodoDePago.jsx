


import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const MetodoDePago = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log('Datos del formulario enviados:', { cardNumber, cardHolder, expirationDate, cvv });
        // Restablecer los campos del formulario
        setCardNumber('');
        setCardHolder('');
        setExpirationDate('');
        setCvv('');
    };

    return (
        <>
            <TextField
                label="Número de tarjeta"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                fullWidth
            />
            <TextField
                label="Titular de la tarjeta"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                fullWidth
            />
            <TextField
                type='date'
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                fullWidth
            />
            <TextField
                label="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                fullWidth
            />
        </>
    )
}

export default MetodoDePago
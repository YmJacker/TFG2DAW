// import
import React from 'react'
import { Button } from '@mui/material'
import { Link } from "react-router-dom"

const BtnIrPatrocinar = () => {
    return (
        // redirect
        <Link to='/Patrocinar'>
            <Button variant="contained">Patrocinar</Button>
        </Link>
    )
}

export default BtnIrPatrocinar
// import
import React from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
// prop
const EscogerTier = ({ Datos, setDatos, comprobarDatos }) => {
    // the values
    let elJson = ["Oro", "Plata", "Bronze"]
    // the selected value
    const handleChange = (event) => {
        setDatos(event.target.value)
        comprobarDatos(true)
    }
    return (
        <>
        {/* select */}
            <FormControl required fullWidth>
                <InputLabel id="patrocinioTier">Niveles de Patrocinio</InputLabel>
                <Select
                    labelId="patrocinioTier"
                    id="patrocinioTier-select"
                    value={Datos}
                    label="Nivel"
                    onChange={handleChange}
                >
                    {elJson.map((elem, index) => (
                        <MenuItem value={index+1} key={'tier' + elem}>
                            {elem}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default EscogerTier
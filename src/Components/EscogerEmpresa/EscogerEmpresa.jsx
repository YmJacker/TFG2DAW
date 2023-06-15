// imports
import React, { useState, useEffect } from 'react'
import { Empresas } from '../../api/Get/Empresas/Empresas'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
// propr
const EscogerEmpresa = ({ Datos, setDatos, comprobarDatos }) => {
    // set Values
    const [empresas, setEmpresas] = useState([])

    const handleChange = (event) => {
        setDatos(event.target.value)
        comprobarDatos(true)
    }
    // get the api values
    useEffect(() => {
        const fetchData = async () => {
            const response = await Empresas()
            setEmpresas(response)
        }
        fetchData()
    }, [])

    return (
        <>
        {/* show the select */}
            <FormControl required fullWidth>
                <InputLabel id="patrocinioEmpresa">Empresa</InputLabel>
                <Select
                    labelId="patrocinioEmpresa"
                    id="patrocinioEmpresa-select"
                    value={Datos}
                    label="Empresa"
                    onChange={handleChange}
                >
                    {
                        empresas.map((elem) => (
                            <MenuItem value={elem.cif} key={'empresa' + elem.cif}>{elem.nombre}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default EscogerEmpresa
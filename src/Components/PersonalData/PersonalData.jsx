// import
import React, { useState, useEffect } from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
// props
const PersonalData = ({ Datos, setDatos, comprobarDatos }) => {
    const datosPersonales = Datos
    // set values
    const [nombre, setNombre] = useState(datosPersonales.nombre)
    const [apellido, setApellido] = useState(datosPersonales.apellido)
    const [sexo, setSexo] = useState(datosPersonales.genero)
    const [provincia, setProvincia] = useState(datosPersonales.provincia)
    const [codigoPostal, setCodigoPostal] = useState(datosPersonales.codigoPostal)
    const [telefono, setTelefono] = useState(datosPersonales.telefono)
    const [dni, setDni] = useState(datosPersonales.dni)
    const [foto, setFoto] = useState(datosPersonales.imagen)
    const [biografia, setBiografia] = useState(datosPersonales.biografia)
    // errors
    const [errorNombre, setErrorNombre] = useState(true)
    const [errorApellido, setErrorApellido] = useState(true)
    const [errorCodigoPostal, setErrorCodigoPostal] = useState(true)
    const [errorTelefono, setErrorTelefono] = useState(true)
    const [errorDni, setErrorDni] = useState(true)

    // test the values and setters with validations
    const handleNombreChange = (event) => {
        const value = event.target.value
        setNombre(value)
        setErrorNombre(/^[A-Za-záéíóúñÁÉÍÓÚÑ\s'-]+$/.test(value))
    }
    const handleApellidoChange = (event) => {
        const value = event.target.value
        setApellido(value)
        setErrorApellido(/^[A-Za-záéíóúñÁÉÍÓÚÑ\s'-]+$/.test(value))
    }
    const handleSexoChange = (event) => {
        setSexo(event.target.value)
    }
    const handleProvinciaChange = (event) => {
        setProvincia(event.target.value)
    }
    const handleCodigoPostalChange = (event) => {
        const value = event.target.value
        setCodigoPostal(value)
        setErrorCodigoPostal(/^\d{5}$/.test(value))
    }
    const handleTelefonoChange = (event) => {
        const value = event.target.value
        setTelefono(value)
        setErrorTelefono(/^\d{9}$/.test(value))
    }
    const handleDniChange = (event) => {
        const value = event.target.value
        setDni(value)
        setErrorDni(/^\d{8}[A-Za-z]$/.test(value))
    }
    const handleFotoChange = (event) => {
        const file = event.target.files[0]
        setFoto(file)
    }
    const handleBiografiaChange = (event) => {
        const value = event.target.value
        setBiografia(value)
    }
    // api to get the state in Spain
    const [provinciaFromApi, setProvinciaFromApi] = useState([])
    const url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&sort=provincia&facet=ccaa&facet=provincia'
    const porvinciasApi = async () => {
        const res = await fetch(`${url}`).then(res => res.json()).then(cositas => cositas.facet_groups[1].facets)
        const arr = []
        res.forEach(element => {
            arr.push(element.name)
        })
        setProvinciaFromApi(arr)
    }
    // when some of the values change active this
    useEffect(() => {
        // set and vaidate if is not void
        setDatos({ "nombre": nombre, "apellido": apellido, "genero": sexo, "provincia": provincia, "codigoPostal": codigoPostal, "telefono": telefono, "dni": dni, "imagen": foto, "biografia": biografia })
        if (nombre !== ''
            && apellido !== ''
            && sexo !== ''
            && provincia !== ''
            && codigoPostal !== ''
            && telefono !== ''
            && errorNombre
            && errorApellido
            && errorCodigoPostal
            && errorTelefono
            && errorDni) {
            comprobarDatos(true)
        }
        else comprobarDatos(false)
    }, [nombre, apellido, sexo, provincia, codigoPostal, telefono, foto, biografia])

    useEffect(() => {
        porvinciasApi()
    }, [])

    return (
        <>
            <TextField
                error={!errorNombre}
                label="Nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
                fullWidth
            />
            <TextField
                error={!errorApellido}
                label="Apellido"
                value={apellido}
                onChange={handleApellidoChange}
                required
                fullWidth
            />
            <FormControl required fullWidth>
                <InputLabel id="sexo-label">Sexo</InputLabel>
                <Select
                    labelId="sexo-label"
                    id="sexo"
                    value={sexo}
                    onChange={handleSexoChange}
                >
                    <MenuItem value="F">Femenino</MenuItem>
                    <MenuItem value="M">Masculino</MenuItem>
                </Select>
            </FormControl>
            <FormControl required fullWidth>
                <InputLabel id="Provincia">Provincia</InputLabel>
                <Select
                    labelId="Provincia"
                    id="Prov"
                    value={provincia}
                    onChange={handleProvinciaChange}
                >
                    {
                        provinciaFromApi.map((elem) => (
                            <MenuItem value={elem} key={elem}>{elem}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <TextField
                error={!errorDni}
                label="DNI"
                value={dni}
                onChange={handleDniChange}
                required
                fullWidth
            />
            <TextField
                error={!errorCodigoPostal}
                label="Código Postal"
                value={codigoPostal}
                onChange={handleCodigoPostalChange}
                required
                fullWidth
            />
            <TextField
                error={!errorTelefono}
                label="Teléfono"
                value={telefono}
                onChange={handleTelefonoChange}
                required
                fullWidth
            />
            <TextField
                type="file"
                label="Foto"
                onChange={handleFotoChange}
                inputProps={{ accept: 'image/*' }}
                fullWidth
            />

            <TextField
                label="Biografía"
                value={biografia}
                onChange={handleBiografiaChange}
                multiline
                fullWidth
            />
        </>
    )
}

export default PersonalData

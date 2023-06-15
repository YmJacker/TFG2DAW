// import
import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
// props
const UserData = ({ Datos, setDatos, comprobarDatos }) => {
    const datosPersonales = Datos
    // the values
    const [email, setEmail] = useState(datosPersonales.correo)
    const [username, setUsername] = useState(datosPersonales.nombreUsuario)
    const [password, setPassword] = useState(datosPersonales.contrasenya)
    const [confirmPassword, setConfirmPassword] = useState(datosPersonales.contrasenyaConfirm)
    // erros
    const [errorUsername, setErrorUsername] = useState(true)
    const [errorEmail, setErrorEmail] = useState(true)
    const [errorPassword, setErrorPassword] = useState(true)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(true)
    // test the values and setters
    const usernameCheck = (event) => {
        const value = event.target.value
        setUsername(value)
        !repetidoUser.includes(value) ? setErrorUsername(true) : setErrorUsername(false)
    }
    const emailCheck = (event) => {
        const value = event.target.value
        setEmail(value)
        if((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)){
            !repetidoEmail.includes(value) ? setErrorEmail(true) : setErrorEmail(false)
        }else{
            setErrorEmail(false)
        }
    }
    const passwordCheck = (event) => {
        const value = event.target.value
        setPassword(value)
        (/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/).test(value) ? setErrorPassword(true) : setErrorPassword(false)
    }
    const confirmPasswordCheck = (event) => {
        const value = event.target.value
        setConfirmPassword(value)
        password === value? setErrorConfirmPassword(true) : setErrorConfirmPassword(false)
    }
    // see if the user name is taked
    const [repetidoUser, setRepetidoUser] = useState([])
    const [repetidoEmail, setRepetidoEmailr] = useState([])
    const url = 'http://apicei58.ieslasenia.org/asistentes'
    const repetidoApi = async () => {
        const res = await fetch(`${url}`).then(res => res.json())
        const arrU = []
        const arrE = []
        res.forEach(element => {
            arrU.push(element.nombreUsuario)
            arrE.push(element.correo)
        })
        setRepetidoUser(arrU)
        setRepetidoEmailr(arrE)
    }
    // when somo of the values change active this
    useEffect(() => {
        setDatos({ "correo": email, "nombreUsuario": username, "contrasenya": password, "contrasenyaConfirm": password })
        if (username !== ''
            && email !== ''
            && password !== ''
            && confirmPassword !== ''
            && errorUsername
            && errorEmail
            && errorPassword
            && errorConfirmPassword) {
            comprobarDatos(true)
        }
        else comprobarDatos(false)
    }, [email, username, password, confirmPassword])

    useEffect(() => {
        repetidoApi()
    })

    return (
        <>
        {/* return part of the form */}
            <TextField
                label="Nombre de usuario"
                value={username}
                onChange={usernameCheck}
                fullWidth
                required
                error={!errorUsername}
            />

            <TextField
                label="Correo electrónico"
                value={email}
                onChange={emailCheck}
                fullWidth
                required
                error={!errorEmail}
            />

            <TextField
                label="Contraseña"
                value={password}
                onChange={passwordCheck}
                type="password"
                fullWidth
                required
                error={!errorPassword}
            />

            <TextField
                label="Confirmar contraseña"
                value={confirmPassword}
                onChange={confirmPasswordCheck}
                type="password"
                fullWidth
                required
                error={!errorConfirmPassword}
            />

        </>
    )
}

export default UserData
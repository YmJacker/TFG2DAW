// the imports
import React from 'react'
import { Perfil } from '../../Components'

// function recive the props and send to Perfil
const PerfilUsuarioLog = ({ Sesion, setSession }) => {
    return (
        <>
            <Perfil Sesion={Sesion} setSession={setSession} />
        </>
    )
}

export default PerfilUsuarioLog
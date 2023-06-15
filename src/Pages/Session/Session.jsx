// the imports
import React from 'react'
import { LogIn } from '../../Components'

// function recive the props and send to LogIn
const Session = ({ activaSesion }) => {
    return (
        <>
            <LogIn activaSesion={activaSesion} />
        </>
    )
}

export default Session
// import
import React, { useState } from 'react'
import { Box, Button, Stepper, Step, StepLabel, Typography } from "@mui/material"
import { PersonalData, UserData, EscogerEmpresa, EscogerTier, MetodoDePago  } from "../"
import { Asistentes, Patrocinador } from '../../api/Post'
// the phase or steps
const stepsEntrada = ['Datos personales', 'Crear una cuenta', 'Procedimiento de pago']
const stepsPatrocinar = ['Escoja su empresa', 'El paquete deseado', 'Procedimiento de pago']
// the props
const PhaseCompra = ({ cerrar, tipoCompra }) => {
    // phases
    const [activeStep, setActiveStep] = useState(0)
    // Informacion || the values
    const [infoPersonal, setInfoPersonal] = useState({ "nombre": '', "apellido": '', "genero": '', "provincia": '', "codigoPostal": '', "telefono": '', "dni": '', "imagen": '', "biografia": '' })
    const [usuario, setUsuario] = useState({ "correo": '', "contrasenya": '', "contrasenyaConfirm": '', 'nombreUsuario': '' })
    const [empresa, setEmpresa] = useState({})
    const [tier, setTier] = useState({})
    // validate the form input values
    const [validoPersonal, setValidoPersonal] = useState(false)
    const [validoUser, setValidoUser] = useState(false)
    const [validoEmpresa, setValidoEmpresa] = useState(false)
    const [validoTier, setValidoTier] = useState(false)

    const steps = tipoCompra === 'Entrada' ? stepsEntrada : stepsPatrocinar

    // previus phase
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    // next phase
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    // close the Dialog
    const procederACerrar = () => {
        cerrar()
    }

    // post to the api
    const entradasSubmit = async (event) => {
        event.preventDefault()
        const form = { ...infoPersonal, ...usuario }
        Asistentes(form)
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    const patrocinioSubmit = async (event) => {
        event.preventDefault()
        const form = { "empresa": empresa, "paquete": tier }
        Patrocinador(form)
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    // values setters
    const datosPersonal = (formData) => {
        setInfoPersonal(formData)
    }
    const datosUsuario = (formData) => {
        setUsuario(formData)
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, padding: '20px' }}>
            {/* stepper, title */}
            <Stepper activeStep={activeStep}>
                {
                    steps.map((label) => {
                        const stepProps = {}
                        const labelProps = {}
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        )
                    })

                }
            </Stepper>
            {/* the form to buy ticket or sponsor */}
            <>
                <form onSubmit={tipoCompra === 'Entrada' ? entradasSubmit : patrocinioSubmit} action="" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {
                        // phase 1
                        activeStep === 0
                        && (tipoCompra === 'Entrada'
                            ? <PersonalData Datos={infoPersonal} setDatos={datosPersonal} comprobarDatos={setValidoPersonal} />
                            : <EscogerEmpresa Datos={empresa} setDatos={setEmpresa} comprobarDatos={setValidoEmpresa} />)
                    }
                    {
                        // pahe 2
                        activeStep === 1
                        && (tipoCompra === 'Entrada'
                            ? <UserData Datos={usuario} setDatos={datosUsuario} comprobarDatos={setValidoUser} />
                            : <EscogerTier Datos={tier} setDatos={setTier} comprobarDatos={setValidoTier} />)
                    }
                    {activeStep === 2 && <MetodoDePago />}
                    {
                        // phase 3 payment
                        activeStep === 3
                        && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography variant='h2' sx={{ margin: 1 }}>Se ha hecho el pago correctamente</Typography>
                            <Typography variant='h3' sx={{ margin: 1 }}>Gracias a su colaboración</Typography>
                        </Box>
                    }
                    {/* the buttons to go back, next or finish */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {(activeStep !== 3) && <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            aterior
                        </Button>}
                        <Box sx={{ flex: '1 1 auto' }} />
                        {(activeStep === 2) && <Button type='submit'>Pagar</Button>}
                        {
                            // with the information can go to the next step or no
                            activeStep === 0 && <Button
                                onClick={handleNext}
                                disabled={activeStep === 0 && (tipoCompra === 'Entrada' ? !validoPersonal : !validoEmpresa)}
                            >
                                Siguiente
                            </Button>
                        }
                        {
                            // with the information can go to the next step or no
                            activeStep === 1 && <Button
                                onClick={handleNext}
                                disabled={activeStep === 1 && (tipoCompra === 'Entrada' ? !validoUser : !validoTier)}
                            >
                                Siguiente
                            </Button>
                        }
                        {/* the laststep close */}
                        {(activeStep === 3) && <Button onClick={procederACerrar}>Cerrar</Button>}
                    </Box>
                </form>
            </>
        </Box>
    )
}

export default PhaseCompra
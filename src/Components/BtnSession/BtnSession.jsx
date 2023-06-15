
//  imports
import { Link } from 'react-router-dom'
import { Fab } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

// redirect
const BtnSession = () => {
    return (
        <Link to='/IniciarSesion'>
            <Fab color="secondary" aria-label="HomeIcon">
                <PersonIcon />
            </Fab>
        </Link>
    )
}

export default BtnSession
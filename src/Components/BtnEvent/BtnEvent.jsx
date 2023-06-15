// imports
import { Link } from 'react-router-dom'
import { Fab } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'

const BtnEvent = () => {
    return (
        // redirect
        <Link to='/Evento'>
            <Fab color="secondary" aria-label="HomeIcon">
                <EventIcon/>
            </Fab>
        </Link>
    )
}

export default BtnEvent
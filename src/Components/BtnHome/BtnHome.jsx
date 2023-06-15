// imports
import { Link } from 'react-router-dom'
import { Fab } from '@mui/material'
// export the button
const BtnHome = () => {
    return (
        // the Link redirect the page
        <Link to='/'>
            <Fab color="secondary" aria-label="HomeIcon">
                <img src="https://fedem.es/wp-content/uploads/2016/12/cropped-favicon-web-32x32.png" alt="Home" />
            </Fab>
        </Link>
    )
}

export default BtnHome
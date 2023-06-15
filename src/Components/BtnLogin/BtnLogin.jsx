// imports
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const BtnLogin = () => {
    return (
        // redirect
        <Link to='/Login'>
            <Fab color="secondary" aria-label="HomeIcon">
                <AccessibilityIcon />
            </Fab>
        </Link>
    )
}

export default BtnLogin
// imports
import React from 'react'
import { Card, Box, CardHeader, CardContent, CardActions, Typography } from '@mui/material'
import BtnPatrocinar from '../BtnPatrocinar/BtnPatrocinar'
import data from '../../json/tierPatrocinadores.json'
import textos from '../../json/textoVentaTiers.json'

const BannerPatrocinio = () => {
    // show the sponsor tier
    return (
        <Box sx={{ height: '100%', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, flexWrap: 'wrap', position: 'relative' }}>
            {
                // for each one of the,
                (data.nivel).map((elem, index) => (
                    <Card sx={{ maxWidth: 345 }} key={'card' + index} variant="outlined">
                        <CardHeader
                            // the name of the level 
                            title={elem}
                        />
                        <CardContent>
                            {
                                // the description of each one and how many paragraph they have
                                Object.values(textos)[index].map((element, i) => (
                                    <Typography variant="body2" color="text.secondary" key={'textos' + index + 'del' + i}>
                                        {element}
                                    </Typography>
                                ))
                            }
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: 3 }}>
                            {/* the button to pay the sponsor */}
                            <BtnPatrocinar />
                            <Typography variant='h4'>{data.precio[index]+'€'}</Typography>
                        </CardActions>
                    </Card>
                ))
            }
        </Box>
    )
}

export default BannerPatrocinio
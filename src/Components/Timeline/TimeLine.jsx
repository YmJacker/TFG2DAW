// imports
import React, { useState, useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { useWindowSize } from '../../hook'
import '../../css/bloque.css'

function TimeLine() {
    // the web site windows size
    const windowSize = useWindowSize()
    // get the date
    const targetDate = new Date('2024-01-01T00:00:00')
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime())
    // return the time remine
    function calculateRemainingTime() {
        const currentTime = new Date()
        const difference = targetDate - currentTime
        if (difference <= 0) {
            return { days: '00', hours: '00', minutes: '00' }
        }
        // calculate the days, hours and minuts
        const days = padZero(Math.floor(difference / (1000 * 60 * 60 * 24)))
        const hours = padZero(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const minutes = padZero(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        return { days, hours, minutes }
    }
    // the format if is under ten show the number with a 0 before
    function padZero(value) {
        return value < 10 ? `0${value}` : value
    }

    useEffect(() => {
        // update the time every 1s
        const intervalId = setInterval(() => {
            setRemainingTime(calculateRemainingTime())
        }, 1000)

        // clear the interval
        return () => clearInterval(intervalId)
    }, [])

    return (
        <Box className='Bloque' sx={{ flexDirection: 'column', padding: '1rem' }}>
            <Typography variant='h3'>Nos vemos en:</Typography>
            {/* wrap ort no wrap if is in mobile format */}
            <Box sx={{ display: 'flex', flexDirection: windowSize.width > 570 ? 'row' : 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                {/* days, hours, minuts */}
                <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }} elevation={3}>
                    <Typography variant='h1'>{remainingTime.days}</Typography> days
                </Paper>
                <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }} elevation={3}>
                    <Typography variant='h1'>{remainingTime.hours}</Typography> hours
                </Paper>
                <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }} elevation={3}>
                    <Typography variant='h1'>{remainingTime.minutes}</Typography> minutes
                </Paper>
            </Box>
        </Box>
    )
}

export default TimeLine
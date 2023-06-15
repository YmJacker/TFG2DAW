// imports
import React from 'react'
import data from '../../json/tierPatrocinadores.json'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const TablaComparativa = () => {
    const elJson = []
    // filter the information i want
    for (const key in data) {
        if (key === 'nivel') {
            continue
        }
        const arr = []
        arr.push(key)
        data[key].forEach(element => arr.push(element))
        elJson.push(arr)
    }
    return (
        // show a table of quality of each one tier
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {/* the first row */}
                            <TableCell
                                key='caracteristicas'
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                caracteristicas
                            </TableCell>
                            {data.nivel.map((column) => (
                                // the first colum quality name
                                <TableCell
                                    key={column}
                                    sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            // the json information in the table
                            elJson.map((elem, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={'row' + index}>
                                        {elem.map((value, i) => {
                                            return (
                                                <TableCell key={value + i} sx={{ textTransform: i == 0 ? 'uppercase' : 'none', fontWeight: i == 0 ? 'bold' : 'normal' }}>
                                                    {value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TablaComparativa
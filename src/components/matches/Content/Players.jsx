import React from 'react'
import {Paper, Typography, createTheme } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TabPanel from "../../../services/TabPanel";
function Players({match,tab,StyledTableCell,StyledTableRow}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#9a1132",
            },
        },
    });
  return (
    <>
    <TabPanel index={2}
                        value={tab}>
                        <Typography variant={'h5'} color={theme.palette.primary.main} mb={'1rem'}>{match?.homeTeam.name} players</Typography>
                        <TableContainer elevation={5}
                            component={Paper}
                            sx={{
                                borderRadius: '1rem',
                                width: { xs: 300, sm: 500, md: 700, lg: 900 },
                                marginX: 'auto'
                            }}>
                            <Table sx={{ minWidth: 700 }}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{ width: { xs: '40px', sm: '100px' } }}>Number</StyledTableCell>
                                        <StyledTableCell sx={{
                                            position: 'sticky',
                                            left: '0',
                                            boxShadow: "5px 2px 5px grey",
                                            width: { xs: '80px', md: '400px' }
                                        }}>Name</StyledTableCell>
                                        <StyledTableCell align="center">Position</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {match?.homeTeam.startingPlayers.map((player, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell component="th"
                                                scope="row" sx={{ width: { xs: '40px', sm: '100px' } }}>
                                                <Typography variant={'subtitle1'}>{player.number}</Typography>
                                            </StyledTableCell>
                                            <StyledTableCell component="th"
                                                scope="row"
                                                sx={{
                                                    position: 'sticky',
                                                    left: '0',
                                                    boxShadow: "5px 2px 5px grey",
                                                    backgroundColor: '#eeeee4',
                                                    width: { xs: '80px', md: '400px' }
                                                }}>
                                                {player.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{player.position}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography variant={'h5'} color={theme.palette.primary.main} mt={'3rem'} mb={'1rem'}>{match?.awayTeam.name} players</Typography>
                        <TableContainer elevation={5}
                            component={Paper}
                            sx={{
                                borderRadius: '1rem',
                                width: { xs: 300, sm: 500, md: 700, lg: 900 },
                                marginX: 'auto'
                            }}>
                            <Table sx={{ minWidth: 700 }}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{ width: { xs: '40px', sm: '100px' } }}>Number</StyledTableCell>
                                        <StyledTableCell sx={{
                                            position: 'sticky',
                                            left: '0',
                                            boxShadow: "5px 2px 5px grey",
                                            width: { xs: '80px', md: '400px' }
                                        }}>Name</StyledTableCell>
                                        <StyledTableCell align="center">Position</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {match?.awayTeam.startingPlayers.map((player, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell component="th"
                                                scope="row" sx={{ width: { xs: '40px', sm: '100px' } }}>
                                                <Typography variant={'subtitle1'}>{player.number}</Typography>
                                            </StyledTableCell>
                                            <StyledTableCell component="th"
                                                scope="row"
                                                sx={{
                                                    position: 'sticky',
                                                    left: '0',
                                                    boxShadow: "5px 2px 5px grey",
                                                    backgroundColor: '#eeeee4',
                                                    width: { xs: '80px', md: '400px' }
                                                }}>
                                                {player.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{player.position}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel></>
  )
}

export default Players
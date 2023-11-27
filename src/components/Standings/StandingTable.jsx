import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {createTheme} from "@mui/material";

export default function StandingTable({ rowData }) {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        }
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        backgroundColor: '#eeeee4',
        '&:last-child td, &:last-child th': {
            border: 0,
        }

    }));
    return (
        <TableContainer elevation={5}
            component={Paper}
            sx={{ borderRadius: '1rem', width: { xs: 300, sm: 500, md: 700, lg: 900 }, marginX: 'auto' }}>
            <Table sx={{ minWidth: 700 }}>
                <TableHead style={{ backgroundColor:'red' }}>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell sx={{
                            position: 'sticky',
                            left: '0',
                            boxShadow: "5px 2px 5px grey"
                        }}>Team</StyledTableCell>
                        <StyledTableCell align="center">MP</StyledTableCell>
                        <StyledTableCell align="center">W</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        <StyledTableCell align="center">L</StyledTableCell>
                        <StyledTableCell align="center">GF</StyledTableCell>
                        <StyledTableCell align="center">GA</StyledTableCell>
                        <StyledTableCell align="center">GD</StyledTableCell>
                        <StyledTableCell align="center">Pts</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th"
                                scope="row">
                                {row.position}
                            </StyledTableCell>
                            <StyledTableCell component="th"
                                scope="row"
                                sx={{
                                    position: 'sticky',
                                    left: '0',
                                    boxShadow: "5px 2px 5px grey",
                                    backgroundColor: '#eeeee4'
                                }}>
                                <img style={{ verticalAlign: 'text-top', marginRight: '5px',display: 'inline' }}
                                    src={`./images/standingLogos/${row.country}.png`}
                                    alt={`${row.alternateName} logo`}
                                    width={20}
                                    height={15} /> {row.alternateName}
                            </StyledTableCell>
                            <StyledTableCell align="center">{(row.matches.filter(match => match.status === 'completed')).length}</StyledTableCell>
                            <StyledTableCell align="center">{(row.points - row.draws) / 3}</StyledTableCell>
                            <StyledTableCell align="center">{row.draws}</StyledTableCell>
                            <StyledTableCell align="center">{row.losses}</StyledTableCell>
                            <StyledTableCell align="center">{row.goalsScored}</StyledTableCell>
                            <StyledTableCell align="center">{row.goalsConceded}</StyledTableCell>
                            <StyledTableCell align="center">{row.goalsDifference}</StyledTableCell>
                            <StyledTableCell align="center">{row.points}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
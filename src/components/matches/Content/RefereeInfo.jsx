import React from 'react'
import { Paper, createTheme } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TabPanel from "../../../services/TabPanel";
function RefereeInfo({match,tab,StyledTableCell,StyledTableRow}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#9a1132",
            },
        },
    });
  return (
    <>
    <TabPanel index={3}
                        value={tab}>
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
                                        <StyledTableCell></StyledTableCell>
                                        <StyledTableCell sx={{
                                            position: 'sticky',
                                            left: '0',
                                            boxShadow: "5px 2px 5px grey",
                                            width: { xs: '80px', md: '400px' }
                                        }}>Role</StyledTableCell>
                                        <StyledTableCell align="center">Name</StyledTableCell>
                                        <StyledTableCell align="center">Country</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {match?.officials.map((official, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell component="th"
                                                scope="row">
                                                {index + 1}
                                            </StyledTableCell>
                                            <StyledTableCell component="th"
                                                scope="row"
                                                sx={{
                                                    position: 'sticky',
                                                    left: '0',
                                                    boxShadow: "5px 2px 5px grey",
                                                    backgroundColor: '#eeeee4',
                                                    width: { xs: '140px', md: '400px' }
                                                }}>
                                                {official.role}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{official.name}</StyledTableCell>
                                            <StyledTableCell align="center">{official.country}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel></>
  )
}

export default RefereeInfo
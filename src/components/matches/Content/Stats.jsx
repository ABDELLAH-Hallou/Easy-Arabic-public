import React from 'react'
import { Box, Button, Paper, Tab, Tabs, Typography, createTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import TabPanel from "../../../services/TabPanel";
function Stats({match,tab}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#9a1132",
            },
        },
    });
  return (
    <>
    <TabPanel value={tab}
                        index={0}>
                        <Paper elevation={3}
                            sx={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1rem' }}>
                            <Box my={'1rem'}>
                                <Typography textAlign={'center'}
                                    variant={'h6'}
                                    my={'1rem'}
                                    color={theme.palette.primary.main}
                                    fontWeight={700}>Ball Possession</Typography>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{Math.round(match?.homeTeam.statistics.ballPossession)} %</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Total</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{Math.round(match?.awayTeam.statistics.ballPossession)} %</Grid2>
                                </Grid2>
                            </Box>
                            <Box my={'2rem'}>
                                <Typography textAlign={'center'}
                                    variant={'h6'}
                                    fontWeight={700}
                                    my={'1rem'}
                                    color={theme.palette.primary.main}>Goal</Typography>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.goals}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Total</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.goals}</Grid2>
                                </Grid2>
                            </Box>
                            <Box my={'2rem'}>
                                <Typography textAlign={'center'}
                                    variant={'h6'}
                                    fontWeight={700}
                                    my={'1rem'}
                                    color={theme.palette.primary.main}>Discipline</Typography>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.yellowCards}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Yellow Cards</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.yellowCards}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.redCards}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Red Cards</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.redCards}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.foulsCommited}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Fouls Against</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.foulsCommited}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.offsides}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Offsides</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.offsides}</Grid2>
                                </Grid2>
                            </Box>
                            <Box my={'2rem'}>
                                <Typography textAlign={'center'}
                                    variant={'h6'}
                                    fontWeight={700}
                                    my={'1rem'}
                                    color={theme.palette.primary.main}>Distribution</Typography>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.passes}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Passes</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.passes}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.passesCompleted}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Passes Completed</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.passesCompleted}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.crosses}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Crosses</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.crosses}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.crossesCompleted}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Crosses Completed</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.crossesCompleted}</Grid2>
                                </Grid2>
                            </Box>
                            <Box my={'2rem'}>
                                <Typography textAlign={'center'}
                                    variant={'h6'}
                                    fontWeight={700}
                                    my={'1rem'}
                                    color={theme.palette.primary.main}>Set Plays</Typography>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.corners}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Corners</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.corners}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.statistics.freeKicks}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Free Kicks</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.statistics.freeKicks}</Grid2>
                                </Grid2>
                                <Grid2 container
                                    spacing={3}>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.homeTeam.penalties}</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>Penalties Scored</Grid2>
                                    <Grid2 textAlign={'center'}
                                        xs={4}>{match?.awayTeam.penalties}</Grid2>
                                </Grid2>
                            </Box>
                        </Paper>
                    </TabPanel>
    </>
  )
}

export default Stats
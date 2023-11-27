import {Box, Button, Paper, Tab, Tabs, Typography, useMediaQuery,createTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import StyleIcon from '@mui/icons-material/Style';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import React from "react";
import logo from "../../../assets/images/logo.png"
function FinalResults({match}) {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
      const medium = useMediaQuery(theme.breakpoints.up("md"));
    const small = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
    <Box display={'flex'}
                 justifyContent={'center'}
                 alignItems={'center'}>
                <img src={logo}
                       alt={'logo of world cup'}
                       width={50}
                       height={70}/>
                <Typography textAlign={'center'}
                            variant={'h5'}
                            color={theme.palette.primary.main}>Qatar World Cup 2022 Live Stats</Typography>
            </Box>

            <Box py={'3rem'}>
                <Grid2 container
                       spacing={2}
                       alignItems={'center'}>
                    <Grid2 xs={5}
                           md={4}
                           display={'flex'}
                           flexWrap={'wrap'}
                           alignItems={'center'}>
                        <Typography variant={small ? 'subtitle1' : medium ? 'h6' : 'subtitle2'}
                                    fontWeight={700}>{match?.homeTeam.name.toUpperCase()}</Typography>
                        <Box sx={{width: {xs: 40, md: 90}, height: {xs: 25, md: 50}, position: 'relative'}}>
                            <img style={{
                                verticalAlign: 'text-top',
                                marginLeft: small ? '0.5rem' : medium ? '2rem' : '0.1rem'
                            }}
                                   src={`/images/standingLogos/${match?.homeTeam.country}.png`}
                                   fill
                                   alt={match?.homeTeam.name}/>
                        </Box>

                    </Grid2>
                    <Grid2 xs={3}
                           md={4}
                           display={'flex'}
                           justifyContent={'center'}>
                        <Typography fontWeight={700}
                                    variant={small ? 'subtitle1' : medium ? 'h6' : 'subtitle2'}>{match?.homeTeam.goals}</Typography>
                        {
                            (match?.homeTeam.penalties!==0) && <Typography fontWeight={700} marginLeft={'3px'} variant={small ? 'subtitle1' : medium ? 'h6' : 'caption'}>( {match?.homeTeam.penalties} )</Typography>
                        }
                        <Typography fontWeight={700}
                                    variant={small ? 'subtitle1' : medium ? 'h6' : 'subtitle2'}
                                    mx={small ? '0.5rem' : medium ? '2rem' : '0.2rem'}>-</Typography>
                        <Typography fontWeight={700}
                                    variant={small ? 'subtitle1' : medium ? 'h6' : 'subtitle2'}>{match?.awayTeam.goals}</Typography>
                        {
                            (match?.awayTeam.penalties!==0) && <Typography fontWeight={700} marginLeft={'3px'} variant={small ? 'subtitle1' : medium ? 'h6' : 'caption'}>( {match?.awayTeam.penalties} )</Typography>
                        }
                    </Grid2>
                    <Grid2 xs={4}
                           display={'flex'}
                           justifyContent={'flex-end'}
                           flexWrap={'wrap'}
                           alignItems={'center'}>
                        <Box sx={{width: {xs: 40, md: 90}, height: {xs: 25, md: 50}, position: 'relative'}}>
                            <img style={{verticalAlign: 'text-top', marginRight: '2rem'}}
                                   src={`/images/standingLogos/${match?.awayTeam.country}.png`}
                                   fill
                                   alt={match?.awayTeam.name}/>
                        </Box>

                        <Typography variant={small ? 'subtitle1' : medium ? 'h6' : 'subtitle2'}
                                    fontWeight={700}>{match?.awayTeam.name.toUpperCase()}</Typography>
                    </Grid2>
                </Grid2>
            </Box>

            <Box display={'flex'}
                 justifyContent={'center'}
                 alignItems={'center'}>
                <Typography variant={'subtitle1'}
                            sx={{
                                backgroundColor: 'rgb(85, 0, 101)',
                                padding: '3px 15px',
                                color: 'white',
                                borderRadius: '20px'
                            }}>
                    {match?.status === 'completed' ? 'Full time' : match?.status === 'scheduled' ? 'Match not started yet!' : match?.time}
                </Typography>
            </Box>

            {
                (match?.homeTeam.goals !== 0 || match?.awayTeam.goals !== 0) && (
                    <Box mb={'3rem'}>
                        <Grid2 container
                               spacing={2}
                               alignItems={'center'}>
                            <Grid2 xs={5}
                                   alignItems={'center'}>
                                <Box display={'flex'} flexDirection={'column'}>
                                    {
                                        match?.homeTeam.events && match?.homeTeam.events.filter(event => {
                                            return event.typeOfEvent === 'goal'
                                        }).map((goal, index) => {
                                            return (
                                                <Box display={'flex'} alignItems={'center'} my={'5px'} key={index}>
                                                    <Typography variant={'caption'}>{goal.player} ( {goal.minute} )</Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid2>
                            <Grid2 xs={2}
                                   display={'flex'}
                                   justifyContent={'center'}>
                                <SportsSoccerIcon sx={{mr: '5px'}}/>
                            </Grid2>
                            <Grid2 xs={5}
                                   display={'flex'}
                                   justifyContent={'flex-end'}
                                   alignItems={'center'}>
                                <Box display={'flex'} flexDirection={'column'}>
                                    {
                                        match?.awayTeam.events && match?.awayTeam.events.filter(event => {
                                            return event.typeOfEvent === 'goal'
                                        }).map((goal, index) => {
                                            return (
                                                <Box display={'flex'} alignItems={'center'} my={'5px'} key={index}>
                                                    <Typography variant={'caption'}>{goal.player} ( {goal.minute} )</Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                )
            }
            {
                (match?.homeTeam.events.find(event => event.typeOfEvent === 'booking') ||match?.awayTeam.events.find(event => event.typeOfEvent === 'booking')) && (
                    <Box mb={'3rem'}>
                        <Grid2 container
                               spacing={2}
                               alignItems={'center'}>
                            <Grid2 xs={5}
                                   alignItems={'center'}>
                                <Box display={'flex'} flexDirection={'column'}>
                                    {
                                        match?.homeTeam.events && match?.homeTeam.events.filter(event => {
                                            return event.typeOfEvent === 'booking'
                                        }).map((booking, index) => {
                                            return (
                                                <Box display={'flex'} alignItems={'center'} my={'5px'} key={index}>
                                                    <Box width={'15px'} height={'20px'} borderRadius={'2px'} mr={'5px'} sx={{backgroundColor: booking.extraInfo.card === 'yellow' ? '#fed130' : 'red'}} />
                                                    <Typography variant={'caption'}>{booking.player} ( {booking.minute} )</Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid2>
                            <Grid2 xs={2}
                                   display={'flex'}
                                   justifyContent={'center'}>
                                <StyleIcon sx={{mr: '5px'}}/>
                            </Grid2>
                            <Grid2 xs={5}
                                   display={'flex'}
                                   justifyContent={'flex-end'}
                                   alignItems={'center'}>
                                <Box display={'flex'} flexDirection={'column'}>
                                    {
                                        match?.awayTeam.events && match?.awayTeam.events.filter(event => {
                                            return event.typeOfEvent === 'booking'
                                        }).map((booking, index) => {
                                            return (
                                                <Box display={'flex'} alignItems={'center'} my={'5px'} key={index}>
                                                    <Box width={'15px'} height={'20px'} borderRadius={'2px'} mr={'5px'} sx={{backgroundColor: booking.extraInfo.card === 'yellow' ? '#fed130' : 'red'}} />
                                                    <Typography variant={'caption'}>{booking.player} ( {booking.minute} )</Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                )
            }
    </>
  )
}

export default FinalResults
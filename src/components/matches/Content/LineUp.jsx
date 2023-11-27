import React from 'react'
import { Box, Typography, createTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import { TimelineOppositeContent } from "@material-ui/lab";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TabPanel from "../../../services/TabPanel";
function LineUp({match,tab}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#9a1132",
            },
        },
    });
    const substitutions = match?.homeTeam.substitutions.concat(match?.awayTeam.substitutions).sort((a, b) => (b.minute < a.minute) ? 1 : (b.minute > a.minute) ? -1 : 0)
  return (
    <>
    <TabPanel value={tab}
                        index={1}>
                        <Grid2 container>
                            <Grid2 xs={6}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}>
                                <img
                                    src={`/images/standingLogos/${match?.homeTeam.country}.png`}
                                    width={50}
                                    height={30}
                                    alt={match?.homeTeam.name} />
                                <Typography variant={'subtitle1'}
                                    mt={'1rem'}>
                                    {match?.homeTeam.statistics.tactics}
                                </Typography>
                            </Grid2>
                            <Grid2 xs={6}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                alignItems={'flex-end'}>
                                <img
                                    src={`/images/standingLogos/${match?.awayTeam.country}.png`}
                                    width={50}
                                    height={30}
                                    alt={match?.awayTeam.name} />
                                <Typography variant={'subtitle1'}
                                    mt={'1rem'}>
                                    {match?.awayTeam.statistics.tactics}
                                </Typography>
                            </Grid2>
                        </Grid2>
                        <Box my={'2rem'}>
                            <Typography mb={'1rem'}
                                variant={'h6'}
                                fontWeight={700}
                                color={theme.palette.primary.main}>Substitutions Timeline</Typography>
                            <Timeline>
                                {
                                    substitutions.map((item, index) => {
                                        const foundPlayerInHomeTeam = match?.homeTeam.startingPlayers.find((player) => player.name === item.playerOut.name)
                                        if (foundPlayerInHomeTeam) {
                                            return <TimelineItem key={index}>
                                                <TimelineOppositeContent>
                                                    <Typography variant={'subtitle2'}
                                                        color={theme.palette.success.main}><ArrowDropUpIcon />{item.playerIn.name}
                                                    </Typography>
                                                    <Typography variant={'subtitle2'}
                                                        color={theme.palette.error.main}><ArrowDropDownIcon />{item.playerOut.name}
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent color="text.secondary">{item.minute}</TimelineContent>
                                            </TimelineItem>
                                        } else {
                                            return <TimelineItem key={index}>
                                                <TimelineOppositeContent color="text.secondary">
                                                    {item.minute}
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Typography variant={'subtitle2'}
                                                        color={theme.palette.success.main}>{item.playerIn.name}<ArrowDropUpIcon /></Typography>
                                                    <Typography variant={'subtitle2'}
                                                        color={theme.palette.error.main}>{item.playerOut.name}<ArrowDropDownIcon /></Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        }
                                    })
                                }
                            </Timeline>
                        </Box>
                    </TabPanel>
    </>
  )
}

export default LineUp
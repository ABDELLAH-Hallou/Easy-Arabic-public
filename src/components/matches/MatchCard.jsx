import {Box, Paper, Typography, useMediaQuery, useTheme,createTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Moment from "react-moment";
import CircleIcon from '@mui/icons-material/Circle';
import {useEffect, useState} from "react";
import Countdown from "react-countdown";
import {UTCTimeConverter} from "../../utils";
import "../../assets/styles/qatarFont.css"
import { Link } from "react-router-dom";
const MatchCard = ({data}) => {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    const small = useMediaQuery(theme.breakpoints.up("sm"));
    const [color, setColor] = useState('warning')


    useEffect(() => {
        const time = setInterval(() => {
            setColor(prevState => {
                if (prevState === 'success') {
                    return 'warning'
                } else {
                    return 'success'
                }
            })
        }, 1000)
        return () => clearInterval(time)
    }, [])


    return (
        <Link to={`/matches/${data.id}`} >
        <Paper sx={{
            borderRadius: '0.5rem',
            padding: '1rem 0.5rem',
            cursor: 'pointer',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            minHeight: '8rem',
        }}>
            <Grid2 container
                   spacing={1}>
                <Grid2 xs={4}
                       display={'flex'}
                       justifyContent={'flex-start'}
                       alignItems={'center'}>
                    <Box position={'relative'}
                         width={50}
                         height={30}
                         marginRight={'1rem'}>
                        <img src={`/images/standingLogos/${data.homeTeam.country}.png`}
                               fill
                               alt={data.homeTeam.name}/>
                    </Box>
                    <Typography variant={small ? 'h6' : 'caption'}>{data.homeTeam.name}</Typography>

                </Grid2>
                <Grid2 xs={4}
                       display={'flex'}
                       alignItems={'center'}
                       justifyContent={'center'}
                       flexDirection={'column'}
                       textAlign={'center'}>
                    <Moment format="YYYY/MM/DD">
                        {data.date}
                    </Moment>
                    <Typography variant={'caption'}>{data?.venue}</Typography>
                    {
                        data.status === 'in_progress' ? (
                            <Box sx={{margin: 0}}>
                                <Typography variant={'caption'}>Live</Typography>
                                <CircleIcon color={color}
                                            sx={{fontSize: 10, marginLeft: '0.2rem'}}/>
                            </Box>
                        ) : (
                            <Box sx={{margin: 0}}>
                                <Typography variant={'caption'}
                                            color={data.status === 'completed' ? theme.palette.info.main : theme.palette.warning.main}>{data?.status.toUpperCase()}</Typography>
                            </Box>
                        )
                    }
                    {(data.status === 'completed' || data.status === 'in_progress') &&
                        <Typography variant={'subtitle2'}>{data?.homeTeam.goals} - {data?.awayTeam.goals}</Typography>}
                    {
                        data.status === 'scheduled' && <Countdown date={UTCTimeConverter(new Date(data.date))} />
                    }

                </Grid2>
                <Grid2 xs={4}
                       display={'flex'}
                       justifyContent={'flex-end'}
                       alignItems={'center'}>
                    <Typography variant={small ? 'h6' : 'caption'}>{data.awayTeam.name}</Typography>
                    <Box position={'relative'}
                         width={50}
                         height={30}
                         marginLeft={'1rem'}>
                        <img src={`/images/standingLogos/${data.awayTeam.country}.png`}
                               fill
                               alt={data.homeTeam.name}/>
                    </Box>
                </Grid2>
            </Grid2>
        </Paper></Link>
    );
};

export default MatchCard;
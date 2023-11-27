import { useParams } from 'react-router-dom';
import {Box, Container, Divider, Paper, Typography, useTheme, createTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {StadiumInfo} from "../data/stadiums/stadiumInfo";

const StadiumDetail = () => {
    const params = useParams();
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    const sid = params.sid;   
    const stadiumData = StadiumInfo.find(stadium => stadium.id === sid)

    return (
        <>
            <Paper elevation={0}
                   sx={{my: '2rem'}}>
                <Container maxWidth={'xl'}>
                    <Typography variant={'h4'}
                                color={theme.palette.primary.main}
                                fontWeight={900}>{stadiumData.stadium_name}</Typography>
                    <Typography variant={'subtitle2'}
                                color={theme.palette.primary.main}>{stadiumData.subtitle ? stadiumData.subtitle : stadiumData.description}</Typography>
                    <Box display={'flex'}
                         justifyContent={'center'}
                         alignItems={'center'}
                         my={'2rem'}>
                        <Box
                            component="img"
                            sx={{
                                borderRadius: '50px',
                                height: {xs: 200, sm: 400, md: 400, lg: 500},
                                width: {xs: 300, sm: 600, md: 800, lg: 1100},
                            }}
                            alt={`${stadiumData.stadium_name} image`}
                            src={stadiumData.image}
                        />
                    </Box>

                    <Grid2 container
                           sx={{flexDirection: {xs: 'column-reverse', md: 'row'}}}>
                        <Grid2 xs={12}
                               md={8}
                               p={'4rem'}>
                            <Box color={theme.palette.primary.main}
                                 py={'3rem'}>
                                <Typography variant={'h5'}
                                            fontWeight={900}>{stadiumData?.stadium_name}</Typography>
                                <Typography variant={'subtitle1'}
                                            my={'1rem'}>{stadiumData?.subtitle}</Typography>
                                <Typography variant={'subtitle1'}
                                            my={'1rem'}>{stadiumData?.description}</Typography>
                            </Box>
                            <Divider sx={{backgroundColor: '#9a113236'}}/>
                            <Box color={theme.palette.primary.main}
                                 py={'3rem'}>
                                <Typography variant={'subtitle2'}>Details</Typography>
                                <Typography component={'p'}
                                            my={'1rem'}>{stadiumData?.detail}</Typography>
                            </Box>
                            <Divider sx={{backgroundColor: '#9a113236'}}/>
                            <Box color={theme.palette.primary.main}
                                 py={'3rem'}>
                                <Typography variant={'subtitle2'}>FIFA World Cup 2022™ Stadium Capacity</Typography>
                                <Typography variant={'h4'}
                                            fontWeight={800}
                                            my={'1rem'}>{(stadiumData.capacity).toLocaleString('en-US')}</Typography>
                            </Box>
                            <Divider sx={{backgroundColor: '#9a113236'}}/>
                            <Box color={theme.palette.primary.main}
                                 py={'3rem'}>
                                <Typography variant={'subtitle2'}>Location</Typography>
                                <Typography variant={'h4'}
                                            fontWeight={800}
                                            my={'1rem'}>{stadiumData?.location}</Typography>
                            </Box>
                            <Divider sx={{backgroundColor: '#9a113236'}}/>
                            <Box color={theme.palette.primary.main}
                                 py={'3rem'}>
                                <Typography variant={'subtitle2'}
                                            my={'1rem'}>Matches</Typography>
                                {
                                    stadiumData?.matches_planned.map((match, index) => {
                                        return <Typography key={index}
                                                           variant={'subtitle1'}
                                                           my={'0.2rem'}>{match}</Typography>
                                    })
                                }
                            </Box>
                        </Grid2>
                        <Grid2 xs={12}
                               md={4}>
                            <Box position={'sticky'}
                                 top={0}
                                 display={'flex'}
                                 justifyContent={'center'}>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: '50px',
                                        height: {xs: 300, sm: 400, lg: 500},
                                        width: {xs: 350, md: 300, lg: 400},
                                    }}
                                    alt={`${stadiumData.stadium_name} image`}
                                    src={stadiumData.top_view}
                                />
                            </Box>
                        </Grid2>
                    </Grid2>

                </Container>
            </Paper>
        </>
    );
};

export default StadiumDetail;
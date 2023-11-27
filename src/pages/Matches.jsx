import {Box, Container, Paper, Typography, useTheme,createTheme} from "@mui/material";
import {useEffect, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MatchCard from "../components/matches/MatchCard";
import Axios from "axios";
import { useParams } from 'react-router-dom';
import UniqBy from 'lodash/uniqBy'
import logo from "../assets/images/logo.png"

const GroupMatches = () => {
    const [matches, setMatches] = useState()

    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
      const params = useParams();
    const groupId = params.gid.toString().toUpperCase()
    const getMatches = async () => {
        let allMatches = []
        const response = await Axios.get('https://copa22.medeiro.tech/groups')
        const data = await response.data
        console.log(data)
        console.log(0)
        const groupData = data.find((item) => item.code === groupId)
        
        groupData.teams.map((team) => {
            allMatches.push(...team.matches)
        })
        allMatches = allMatches.sort((a, b) => (b.date < a.date) ? 1 : (b.date > a.date) ? -1 : 0)
        allMatches = UniqBy(allMatches, 'id')
        setMatches(allMatches)
    }

    useEffect(() => {
        getMatches().then(()=> console.log("res"))
    }, [])

    return (
        <>
            <Paper
                sx={{minHeight: '80vh', backgroundColor: '#f5f5f5', py: '3rem'}}
                elevation={0}
            >
                <Container>
                    <Box display={'flex'}
                         justifyContent={'center'}
                         alignItems={'center'}>
                        <img src={logo}
                               alt={'logo of world cup'}
                               width={50}
                               height={70}/>
                        <Typography variant={'h5'}
                                    color={theme.palette.primary.main}>Qatar World Cup 2022 Groups</Typography>
                    </Box>
                    <Box my={'2rem'}>
                        <Typography variant={'h6'}
                                    color={theme.palette.primary.main}>Group {groupId} Matches</Typography>
                        <Grid2 container
                               spacing={2}>
                            { (matches)?(
                                matches.map((match) => {
                                    return <Grid2 key={match.id}
                                                  xs={12}
                                                  md={6}>
                                        <MatchCard data={match}/>
                                    </Grid2>
                                })):(null)
                            }
                        </Grid2>
                    </Box>
                </Container>
            </Paper>
        </>
    );
};

export default GroupMatches;
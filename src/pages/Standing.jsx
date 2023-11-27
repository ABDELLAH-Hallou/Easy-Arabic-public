import StandingTable from "../components/Standings/StandingTable";
import {Box, Container, Paper, Tab, Tabs, Typography,createTheme} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Axios from "axios";
import PlayoffChart from "../components/playoff/playoffChart";


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Standings = ({}) => {
    
    let [standingData,setStandingData] = useState(null);
    
    const getStandings = async () => {
        const response = await Axios.get('https://copa22.medeiro.tech/groups')
        setStandingData(response.data)
    }
    useEffect(()=>{
        getStandings();
    },[]);
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    const navigate = useNavigate()
    const [tab, setTab] = useState(0);
    const clickHandler = (code) => {
        navigate(`/groups/${code}`)
    }

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <>
        {(standingData)?(
            <Paper elevation={0}>
                <Container maxWidth={'xl'}>
                    <Box my={'2rem'}>
                        <Tabs value={tab}
                              onChange={handleChange}
                              centered>
                            <Tab label="Groups Stage" {...a11yProps(0)} />
                            <Tab label="Play-off" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={tab}
                              index={0}>
                        {
                            standingData.map((group) => {
                                return <Box my={'4rem'}
                                            key={group.id}>
                                    <Typography variant={'h4'}
                                                mb={'1rem'}
                                                sx={{cursor: 'pointer'}}
                                                onClick={() => clickHandler(group.code)}
                                                textAlign={'center'}
                                                color={theme.palette.primary.main}
                                                style={{ fontFamily:"qatarwcbold"}}>Group {group.code}</Typography>
                                    <StandingTable rowData={group.teams}/>
                                </Box>
                            })
                        }
                    </TabPanel>
                    <TabPanel index={tab} value={1}>
                        <PlayoffChart />
                    </TabPanel>

                </Container>
            </Paper>
        ):(null)}
        </>
    );
};

export default Standings;
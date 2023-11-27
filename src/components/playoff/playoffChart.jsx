import {Typography, useTheme, createTheme} from "@mui/material";
import React, {useEffect, useState} from "react";
import {
    Bracket,
    Seed,
    SeedItem,
    SeedTeam
} from 'react-brackets';
import { Link } from "react-router-dom";
import Axios from "axios";


const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
    return (
        <Seed mobileBreakpoint={breakpoint}
              style={{fontSize: 12}}>
             <SeedItem>
             <Link to={`/matches/${seed.id}`} >
                <div style={{cursor: "pointer"}}>
                    <SeedTeam style={{backgroundColor: seed.winner === seed.teams[0].name ? '#1a7c14' : '#9a1132', borderBottom: '1px solid white'}}>
                        {
                            seed.teams[0]?.flag && (
                                <img
                                    src={`./images/standingLogos/${seed.teams[0]?.flag}.png`}
                                    width={35}
                                    height={20}
                                    alt={seed.teams[0].name}/>
                            )
                        }
                        <Typography variant={'subtitle2'}>
                            {seed.teams[0]?.name || 'TBD'}
                        </Typography>
                        {seed.status === 'completed' && seed.teams[0]?.score}
                        {!!seed.teams[0]?.penalty && <Typography variant={'subtitle2'}>
                            ( {seed.teams[0]?.penalty} )
                        </Typography>}
                    </SeedTeam>
                    <SeedTeam style={{backgroundColor: seed.winner === seed.teams[1].name ? '#1a7c14' : '#9a1132',}}>
                        {
                            seed.teams[1]?.flag && (
                                <img
                                    src={`./images/standingLogos/${seed.teams[1]?.flag}.png`}
                                    width={35}
                                    height={20}
                                    alt={seed.teams[1].name}/>
                            )
                        }
                        <Typography variant={'subtitle2'}>
                            {seed.teams[1]?.name || 'TBD'}
                        </Typography>
                        {seed.status === 'completed' && seed.teams[1]?.score}
                        {!!seed.teams[0]?.penalty && <Typography variant={'subtitle2'}>
                            ( {seed.teams[1]?.penalty} )
                        </Typography>}
                    </SeedTeam>
                </div>
                </Link>
                <div>{seed.date}</div>
            </SeedItem> 
        </Seed>
    );
};

const PlayoffChart = () => {
    // const theme = useTheme()
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    const [roundMatches, setRoundMatches] = useState([])
    const [quarterMatches, setQuarterMatches] = useState([])
    const [semiFinalMatches, setSemiFinalMatches] = useState([])
    const [finalMatch, setFinalMatch] = useState([])
    // const [loading, setLoading] = useState(true)

    const getMatches = async () => {
        const response = await Axios.get('https://copa22.medeiro.tech/brackets')
        // return await response.json()
        console.log(response);
        return response.data;
        
    }

    useEffect(() => {
        getMatches().then((res) => {
            console.log('res is : ', res)
            const roundMatches = [res[0].matches.slice(0,4), res[0].matches.slice(4, res[0].matches.length)]
            for (let i = 0; i < roundMatches.length; i++) {
                roundMatches[i].slice(0,2).map(match => {
                    const data = {
                        id: match.id,
                        date: new Date(match.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: '2-digit',
                            month: 'short',
                            hour: 'numeric',
                            minute: '2-digit',
                            timeZoneName: 'longGeneric'
                        }),
                        status: match.status,
                        winner: match.status === 'completed' ? match.winner : false,
                        teams: [{name: match.homeTeam.name, flag: match.homeTeam.country, score: match.homeTeam.goals,penalty: match.homeTeam.penalties}, {name: match.awayTeam.name, flag: match.awayTeam.country, score: match.awayTeam.goals, penalty: match.awayTeam.penalties}],
                    }
                    setRoundMatches(prevState => {
                        return prevState.concat(data)
                    })
                })
            }
            for (let i = 0; i < roundMatches.length; i++) {
                roundMatches[i].slice(2,5).map(match => {
                    const data = {
                        id: match.id,
                        date: new Date(match.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: '2-digit',
                            month: 'short',
                            hour: 'numeric',
                            minute: '2-digit',
                            timeZoneName: 'longGeneric'
                        }),
                        status: match.status,
                        winner: match.status === 'completed' ? match.winner : false,
                        teams: [{name: match.homeTeam.name, flag: match.homeTeam.country, score: match.homeTeam.goals,penalty: match.homeTeam.penalties}, {name: match.awayTeam.name, flag: match.awayTeam.country, score: match.awayTeam.goals,penalty: match.awayTeam.penalties}],
                    }
                    setRoundMatches(prevState => {
                        return [...prevState, data]
                    })
                })
            }
            res.map((stage,index) => {
                const teams = stage.matches.sort((a, b) => (b.matchNumber < a.matchNumber) ? 1 : (b.matchNumber > a.matchNumber) ? -1 : 0).map((match) => {
                    return {
                        id: match.id,
                        date: new Date(match.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: '2-digit',
                            month: 'short',
                            hour: 'numeric',
                            minute: '2-digit',
                            timeZoneName: 'longGeneric'
                        }),
                        winner: match.status === 'completed' ? match.winner : false,
                        status: match.status,
                        teams: [{name: match.homeTeam.name, flag: match.homeTeam.country, score: match.homeTeam.goals,penalty: match.homeTeam.penalties}, {name: match.awayTeam.name, flag: match.awayTeam.country, score: match.awayTeam.goals,penalty: match.awayTeam.penalties}],
                    }
                })
                if(index === 0){
                    setRoundMatches([...teams])
                }else
                if(index === 1){
                    setQuarterMatches([...teams])
                }else if(index === 2){
                    setSemiFinalMatches([...teams])
                }else if(index === 4) {
                    setFinalMatch([...teams])
                }
            })
        })
    }, [])


    const chartData = [
        {
            title: 'Round of 16',
            seeds: [...roundMatches]
        },
        {
            title: 'Quarter final',
            seeds: [...quarterMatches]
        },
        {
            title: 'Semi-final',
            seeds: [...semiFinalMatches]
        },
        {
            title: 'Final',
            seeds: [...finalMatch]
        }
    ]
console.log(chartData[0].seeds);
    return (
        <Bracket
            rounds={chartData}
            renderSeedComponent={CustomSeed}
            mobileBreakpoint={994}
            roundTitleComponent={(title, roundIndex) => {
                return <div style={{
                    marginRight: '1rem',
                    textAlign: 'center',
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderRadius: '0.2rem'
                }}>{title}</div>;
            }}
        />
    );
};

export default PlayoffChart;
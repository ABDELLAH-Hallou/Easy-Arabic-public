import { Box, Tab, Tabs, createTheme } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import FinalResults from "./Content/FinalResults";
import Stats from "./Content/Stats";
import LineUp from "./Content/LineUp";
import Players from "./Content/Players";
import RefereeInfo from "./Content/RefereeInfo";



const MatchContent = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#9a1132",
            },
        },
    });
    const [match, setMatch] = useState();
    const params = useParams()
    const [tab, setTab] = useState(0);


    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const getMatchData = async () => {
        let response = await Axios.get(`https://copa22.medeiro.tech/matches/${params.mid}`)
        setMatch(response.data)
    }

    useEffect(() => {
        getMatchData()
    }, []);

    
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        }
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        backgroundColor: '#eeeee4',
        '&:last-child td, &:last-child th': {
            border: 0,
        }

    }));
    return (
        <>
            {
                (match) ? (<>
                    <FinalResults match={match} />



                    <Box my={'2rem'}>
                        <Tabs value={tab}
                            onChange={handleChange}
                            centered>
                            <Tab label="Stats" {...a11yProps(0)} />
                            <Tab label="Line up" {...a11yProps(1)} />
                            <Tab label="Players" {...a11yProps(2)} />
                            <Tab label="Referee info" {...a11yProps(3)} />
                        </Tabs >
                    </Box>

                    <Stats match={match} tab={tab} />
                    <LineUp match={match} tab={tab} />
                    <Players match={match} tab={tab} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} />
                    <RefereeInfo match={match} tab={tab} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} />

                    
                </>) : (null)}

        </>
    );
};

export default MatchContent;
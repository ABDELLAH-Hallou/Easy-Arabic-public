import {Container, Paper} from "@mui/material";
import React from "react";
import MatchContent from "../components/matches/MatchContent";
const MatchDetails = () => {
    return (
        <Paper elevation={0}
               sx={{backgroundColor: '#f5f5f5', minHeight: '100vh', py: '3rem'}}>
            <Container maxWidth={'lg'}>
                <MatchContent/>
            </Container>
        </Paper>
    );
};

export default MatchDetails;
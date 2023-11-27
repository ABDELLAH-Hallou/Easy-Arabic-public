import {Box, Container, Paper, Typography} from "@mui/material";

import groupBy from 'lodash/groupBy'
import {GroupsData} from "../data/groups/GroupsData";
import background from "../assets/images/loading-background.jpg";
import logo from "../assets/images/logo.png";
import { GroupsList } from "../components/groups/GroupsList";
export default function Groups (){
    const groups = groupBy(GroupsData, (team) => {
        return team.groups
    })
    return (
        <>
            <Paper style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                paddingTop: '2rem'
            }}>
                <Container maxWidth={'xl'}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <img src={logo} alt={'logo of world cup'} width={50} height={70} />
                        <Typography variant={'h5'} color={'white'}>Qatar World Cup 2022 Groups</Typography>
                    </Box>
                    <GroupsList groups={groups} />
                </Container>
            </Paper>
        </>
    );
};
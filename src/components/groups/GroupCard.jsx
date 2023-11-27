import {Box, Typography} from "@mui/material";
import GroupCardItem from "./GroupCardItem";
import { useNavigate } from "react-router-dom";
import React from "react";
const GroupCard = ({groupTitle, groupData}) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/groups/${groupTitle}`);
        };
    return (
        <Box sx={{backgroundColor: 'white', borderRadius: '1rem', padding: '1rem', cursor: 'pointer'}}
             onClick={clickHandler}>
            <Typography variant={'subtitle2'}
                        textAlign={'center'}
                        mb={'1rem'}
            >
                Group {groupTitle}
            </Typography>
            {
                groupData.map((team, index) => {
                    return <GroupCardItem order={`${groupTitle} ${index + 1}`}
                                          logoUrl={team.flag}
                                          key={team._id}
                                          teamName={team.name_en}/>

                })
            }
        </Box>
    );
};

export default GroupCard;
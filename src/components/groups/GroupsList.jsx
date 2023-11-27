import GroupCard from "./GroupCard";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";


export const GroupsList = ({ groups }) => {
    const groupId = Object.keys(groups).sort();
    const groupedTeams = groupId.map((id, index) => {
        return groups[id];
    });
    return (
        <Grid2 container
            spacing={3}
            margin={0}
            py={'2rem'}>

            {
                groupedTeams.map((group, index) => {
                    return <Grid2 xs={12}
                        key={index}
                        md={3}>
                        <GroupCard groupData={group}
                            groupTitle={group[0].groups} />
                    </Grid2>
                })
            }
        </Grid2>
    );
};
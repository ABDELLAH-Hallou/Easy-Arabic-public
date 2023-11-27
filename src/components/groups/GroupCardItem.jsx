import {Typography, useMediaQuery, useTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";


const GroupCardItem = ({order, logoUrl, teamName}) => {
    const theme = useTheme()
    const xlarge = useMediaQuery(theme.breakpoints.up('xl'))

    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
            <Grid2 container
                   sx={{backgroundColor: '#640f2b', color: 'white', borderRadius: '10px', padding: '0.2rem 0.4rem'}}
                   alignItems={'center'}
                   alignContent={'center'}
                   mb={'1rem'}
                   padding={0.3}
                   spacing={1}
            >

                <Grid2
                    xs={2}
                    md={2}><Typography variant={'caption'}
                                       fontFamily={'Poppins'}>{order}</Typography></Grid2>
                <Grid2
                    xs={2}
                    md={2}>
                    <img src={logoUrl}
                           alt={`${teamName} logo`}
                           style={{display: 'flex'}}
                           width={30}
                           height={20}/>
                </Grid2>
                <Grid2
                    xs={8}
                    md={8}><Typography variant={xlarge ? 'h6' : 'subtitle1'}>{teamName}</Typography></Grid2>
            </Grid2>

    );
};

export default GroupCardItem;
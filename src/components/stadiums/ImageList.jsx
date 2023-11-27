import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { red } from '@mui/material/colors';
import {ImageListItemBar, useMediaQuery, useTheme,createTheme} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ImageListComponent({imageList}) {
    const theme = useTheme()
    const medium = useMediaQuery(theme.breakpoints.up("md"));
    const createtheme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    return (
        <ImageList
            variant="quilted"
            cols={medium ? 4 : 1}
            rowHeight={160}
            sx={{margin: '0', backgroundColor: createtheme.palette.primary.main}}
        >
            {imageList.map((item) => (
                <ImageListItem key={item.url}
                               cols={(medium && item.cols) ? item.cols : 1}
                               rows={item.rows || 1}
                >

                    <img
                        {...srcset(item.url, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    <Link to={`/stadiums/${item.id}`}>
                        <ImageListItemBar
                            style={{backgroundColor:  'rgb(154 17 50 / 60%)'}}
                            title={item.title}
                            subtitle={'more info'}
                            actionIcon={<InfoIcon sx={{color: 'white'}} />}
                        />
                    </Link>
                </ImageListItem>

            ))}
        </ImageList>
    );
}

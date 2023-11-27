import Catalog from "../components/stadiums/Catalog";
import {stadiumImageData} from "../data/stadiums/stadiumImage";
import {Box, Paper, Typography, useTheme, createTheme} from "@mui/material";
import logo from "../assets/images/logo.png"
const Stadiums = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#9a1132",
          },
        },
      });
    return (
        <>
            <Paper sx={{backgroundColor: theme.palette.primary.main, py: '2rem' }}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'2rem'}>
                    <img src={logo} alt={'logo of world cup'} width={50} height={70} />
                    <Typography variant={'h5'} color={'white'}>Qatar World Cup 2022 Stadiums</Typography>
                </Box>
                <Catalog imageList={stadiumImageData} />
            </Paper>
        </>
    );
};

export default Stadiums;
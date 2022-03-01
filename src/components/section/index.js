import React, {useEffect, useState} from 'react';
import {Grid, styled} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {BsSearch} from "react-icons/bs";
import {getLibraries} from "../../api/api";

const BoxSection = styled('div')(({ theme }) => ({
    background:`url(https://cdnjs.com/_/6da6dfe9adcee0de10efcad20d5b33d7.svg)`,
    fontFamily: '"Ubuntu",sans-serif',
    backgroundColor:'#454647',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


function Section(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(async () => {
        // setLoading(true);
        // setError(false);
        const obj = await getLibraries();
        if (obj.success) setData(obj.data);
        // setLoading(false);
    }, []);

    return (
        <BoxSection  sx={{fontFamily:'"Ubuntu",sans-serif',}}>
            <Container sx={{mt:"0px",}}>
                <Box sx={{minHeight:'91vh',color: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <Grid sx={{marginBottom:'60px'}}>
                        <Typography variant="h2" component={"h1"}>Simple. Fast. Reliable.
                            Content delivery at its finest.</Typography>
                        <Typography variant="body1" component={"p"} marginBottom={'30px'}>cdnjs is a free and open-source CDN service trusted by over 12.5% of all websites, serving over 200 billion requests each month, powered by Cloudflare.</Typography>
                        <Typography marginBottom={'20px'}>We make it faster and easier to load library files on your websites.</Typography>
                        <Stack spacing={2} sx={{ width: "100%" }}>

                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                sx={{backgroundColor:'white',borderRadius:'7px',fontWeight:'bold'}}
                                disableClearable
                                options={data.map((option) => option.name)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Search from 4,131 libraries on cdnj..."
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </Stack>

                    </Grid>
                </Box>
            </Container>

        </BoxSection>
    );
}

export default Section;


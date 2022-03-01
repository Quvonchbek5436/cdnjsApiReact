import React, {useEffect, useState,} from 'react';
import {useNavigate}from 'react-router-dom'
import {getLibraries} from "../../api/api";
import Container from "@mui/material/Container";
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function Libraries(props) {
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
    console.log(data)
    const navigate = useNavigate()
    const getName=(name)=>{
        navigate(`/libraries/${name}`);
    }
    return (
        <Container>
            <Stack spacing={2} sx={{ width: "100%",marginTop:'20px' }}>

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
            <Grid container spacing={2}>
                {
                    data.map((items,i)=>{
                        return(
                            <Grid item key={i}  lg={6} md={12} marginTop={3}  >

                                <Card   sx={{height:'100%',backgroundColor: '#343535'}}>

                                    <CardContent>
                                        <Typography gutterBottom sx={{color:'#FF6934',cursor:'pointer'}} variant="h5" component="div" onClick={()=>getName(items.name)}>
                                            {items.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{color:'white'}} color="text.secondary">
                                            {items.latest}
                                        </Typography>
                                    </CardContent>

                                </Card>

                            </Grid>

                        )
                    })
                }

            </Grid>
        </Container>
    );
}

export default Libraries;


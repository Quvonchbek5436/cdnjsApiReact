import React, {useEffect, useState,} from 'react';
import {useNavigate}from 'react-router-dom'
import {getLibraries, getLibrary} from "../../api/api";
import Container from "@mui/material/Container";
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faLink, faShield} from "@fortawesome/free-solid-svg-icons";

function Libraries(props) {
    const [data, setData] = useState([]);
    // const [dataM, setDataM] = useState([]);

    const navigate = useNavigate()
    const getName=(name)=>{
        navigate(`/libraries/${name}`);
    }

    useEffect(async () => {
        const obj = await getLibraries();
        if (obj.success) setData(obj.data);
        // console.log(obj.data)

    }, []);
 // useEffect(async (name) => {
 //     const obj1 = await getLibrary(name);
 //     if (obj1.success) setDataM(obj1.data.assets[obj1.data.assets.length-1].version);
 //    }, []);
 //    console.log(dataM)

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
                    onChange={(e)=>getName(e.target.value)}

                />
            </Stack>
            <Grid container spacing={2}>
                {
                    data.map((items,i)=>{
                        return(
                            <Grid item key={i}  lg={6} md={12} marginTop={3}  >

                                <Card   sx={{height:'100%',backgroundColor: '#343535'}}>

                                    <CardContent>
                                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:2,}}>
                                                <Typography gutterBottom sx={{color:'#FF6934',cursor:'pointer'}} variant="h5" component="h3" onClick={()=>getName(items.name)}>
                                                    {items.name}
                                                </Typography>
                                                {/*<Typography gutterBottom sx={{color:'#FF6934',cursor:'pointer'}} variant="h5" component="h3">*/}
                                                {/*    {dataM.assets[dataM.assets.length-1].version}*/}
                                                {/*</Typography>*/}
                                            </Box>
                                            <Box sx={{justifyContent: 'end',alignItems:'center',}}>
                                                <IconButton sx={{color:'#EBEBEB',fontSize:'16px',"&:hover":{color:'#BDBDBD'}}}><FontAwesomeIcon icon={faLink} /></IconButton>
                                                <IconButton sx={{color:'#EBEBEB',fontSize:'16px',"&:hover":{color:'#BDBDBD'}}}><FontAwesomeIcon icon={faCode} /></IconButton>
                                                <IconButton sx={{color:'#EBEBEB',fontSize:'16px',"&:hover":{color:'#BDBDBD'}}}><FontAwesomeIcon icon={faShield} /></IconButton>
                                            </Box>
                                        </Box>
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


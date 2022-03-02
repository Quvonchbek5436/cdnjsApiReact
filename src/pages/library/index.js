import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { getLibrary} from "../../api/api";
import IconButton from "@mui/material/IconButton";
import {BiCodeAlt} from "react-icons/bi";
import { MdContentCopy} from "react-icons/md";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faLink, faShield} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";

function Library(props) {
    const params=useParams()
    const [data, setData] = useState([]);


    useEffect(async () => {
        const obj = await getLibrary(params);
        console.log(obj)
        if (obj.success) setData(obj.data.assets[obj.data.assets.length-1].files);


    }, []);
    // console.log(data)
    return (
        <div>
            <Container>

                <Grid container spacing={2}>
                    {
                        data.map((items,index)=>{
                            return(
                                <Grid item   lg={10} md={10} marginTop={3}  >

                                    <Card   sx={{height:'100%',backgroundColor: '#343535'}}>

                                        <CardContent sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}   >
                                            <Typography gutterBottom sx={{color:'white'}} variant="h5" component="div" >
                                                https://cdnjs.cloudflare.com/ajax/libs/{items}
                                            </Typography>
                                            {/*<Typography variant="body2" sx={{color:'white'}} color="text.secondary">*/}
                                            {/*    {data.latest}*/}
                                            {/*</Typography>*/}
                                            {/*<Typography variant="body1" sx={{color:'white',marginTop:'10px'}} color="text.secondary">*/}
                                            {/*    {data.version}*/}
                                            {/*</Typography>*/}
                                            <Box sx={{justifyContent: 'end',alignItems:'center',}}>
                                                <IconButton sx={{color:'#EBEBEB',fontSize:'16px',"&:hover":{color:'#BDBDBD'}}}><FontAwesomeIcon icon={faLink} /></IconButton>
                                                <IconButton sx={{color:'#EBEBEB',fontSize:'16px',"&:hover":{color:'#BDBDBD'}}}><FontAwesomeIcon icon={faCode} /></IconButton>
                                                <IconButton sx={{color:'#EBEBEB',fontSize:'16px',"&:hover":{color:'#BDBDBD'}}}><FontAwesomeIcon icon={faShield} /></IconButton>
                                            </Box>

                                        </CardContent>

                                    </Card>

                                </Grid>
                            )
                        })
                    }




                </Grid>
            </Container>
        </div>
    );
}

export default Library;
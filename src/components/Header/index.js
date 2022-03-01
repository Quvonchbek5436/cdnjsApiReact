import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {BsTwitter} from "react-icons/bs";
import {AiTwotoneMessage} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const icons = [<BsTwitter/>, <AiTwotoneMessage/>,];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// 'About', 'Libraries', 'Api', 'Github'

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: '#343535 !important',boxShadow:'none',alignItems:'center',position:'sticky',top:0,bottom:0}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img height="40px" src="https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg" alt=""/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {icons.map((items,i) => (
                                <IconButton key={i} sx={{fontSize:'30px !important',color:'#EBEBEB'}} onClick={handleCloseNavMenu}>
                                    {items}
                                </IconButton>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img height="40px" src="https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg" alt=""/>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {icons.map((items) => (
                            <IconButton
                                sx={{fontSize:'30px !important',color:'#EBEBEB'}}
                                key={items}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {items}
                            </IconButton>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex',alignItems: 'center'}} >
                        <NavLink style={{color:'white',textDecoration:'none',marginLeft:'20px',fontSize:'20px' }} to={'/home'}>Home</NavLink>
                        <NavLink style={{color:'white',textDecoration:'none',marginLeft:'20px',fontSize:'20px' }} to={'/libraries'}>Libraries</NavLink>
                        <NavLink style={{color:'white',textDecoration:'none',marginLeft:'20px',fontSize:'20px' }} to={'/api'}>Api</NavLink>
                        <NavLink style={{color:'white',textDecoration:'none',marginLeft:'20px',fontSize:'20px' }} to={'/github'}>Github</NavLink>
                        <NavLink style={{color:'white',textDecoration:'none',marginLeft:'20px',fontSize:'20px' }} to={'/status'}>Status</NavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;

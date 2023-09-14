import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import LogoMovail from '../../../svg/Logomovail';
import ClearIcon from '@mui/icons-material/Clear';
import { Stack, Button} from '@mui/material';

export default function MenuNavMovail() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MenuIcon sx={{ color: "white" }} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: { xs: 160, sm: 45, md: 60 },
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-40%) rotate(45deg)',
                            zIndex: 1,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Stack 
                    direction='row'
                    spacing={20}
                    >
                    <LogoMovail />
                    <IconButton aria-label="close" >
                        <ClearIcon  sx={{marginTop:-1}}/>
                    </IconButton>
                    </Stack>
                
                </MenuItem>
               
                <Divider />
                <MenuItem onClick={handleClose}>
                Laptops   
                    <ListItemIcon>
                     <ArrowForwardIosIcon fontSize='small'/>
                    </ListItemIcon>
                    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                Desktops de PC
                    <ListItemIcon>
                        <ArrowForwardIosIcon  fontSize="small" />
                    </ListItemIcon>
                    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                Monitors
                    <ListItemIcon>
                        <ArrowForwardIosIcon  fontSize="small" />
                    </ListItemIcon>
                    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                Complements
                    <ListItemIcon>
                        <ArrowForwardIosIcon  fontSize="small" />
                    </ListItemIcon>
                    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                Parts of PC
                    <ListItemIcon>
                        <ArrowForwardIosIcon  fontSize="small" />
                    </ListItemIcon>
                    
                </MenuItem> 
                <MenuItem onClick={handleClose}>
                Periferics
                    <ListItemIcon>
                        <ArrowForwardIosIcon  fontSize="small" />
                    </ListItemIcon>
                    
                </MenuItem>
                <Divider/>
                <Stack direction="row" sx={{marginTop:4}}>
                <MenuItem onClick={handleClose}>
                    <Button variant="outlined" color="primary">
                      help
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button variant="contained" color="primary">
                    Login
                    </Button>
                </MenuItem>
                </Stack>
            </Menu>
        </React.Fragment>
    );
}
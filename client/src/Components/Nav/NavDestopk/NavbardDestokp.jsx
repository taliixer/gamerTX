import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SvgLogo  from "../../../svg/Logo.jsx";
import Button from '@mui/material/Button'
import ButtonNav from './ButtonNav.jsx';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
 
  borderRadius: 20,
  backgroundColor: '#e3e0e0',
  '&:hover': {
    backgroundColor: "#b6b2b2",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
    
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function NavbardDestokp() {
  return (
    <Box sx={{ flexGrow: 1  }}>
    <Box sx={{backgroundColor:"black"}}>
         <Stack
         direction="row"
         justifyContent="space-around"
         alignItems="center"
         spacing={10}
         >
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
          <Typography variant="body1" color="white">Mon-Thu:  9:00 AM - 5:30 PM</Typography>
          <IconButton aria-label="delete" sx={{color:'white'}}>
          <KeyboardArrowDownIcon/>
         </IconButton>
         </Stack>
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
         <Typography variant="body1" color="white">Call Us: (00) 1234 5678</Typography>
         <IconButton aria-label="delete" sx={{color:'white'}}>
           <FacebookIcon  />
         </IconButton>
         <IconButton aria-label="delete" sx={{color:'white'}}>
           <InstagramIcon />
         </IconButton>
         </Stack>
         </Stack>
    </Box>
      <AppBar position="static" color="inherit"    >
      <Toolbar>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4.5}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <SvgLogo/>
          <Typography variant="body1" color="initial" sx={{fontWeight:"bold"}}>Home</Typography>
          <ButtonNav/>
          <Typography variant="body1" color="initial"sx={{fontWeight:"bold"}}>Blog</Typography>
          <Typography variant="body1" color="initial"sx={{fontWeight:"bold"}}>About</Typography>
          <Typography variant="body1" color="initial"sx={{fontWeight:"bold"}}>Contact</Typography>
          <Typography variant="body1" color="initial"sx={{fontWeight:"bold"}}>Pages</Typography>
          <Button variant="contained" color="primary" sx={{ textTransform: 'capitalize',fontSize:16,height:30,borderRadius:2,fontWeight:"bold"}}>
          personalization
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search entiere store here..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button sx={{color:"initial",fontWeight:"bold"}} variant="text" color="primary" startIcon={<PersonOutlineIcon/>}>
            Login / Register
          </Button>
        </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
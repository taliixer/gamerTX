import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { Button, Stack } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoMovail from '../../../svg/LogoMovail';
import MenuNavMovail from './MenuMovail';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: "white",
  color:"grey",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.26),
    color:"white"
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
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavbardMovail() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Box sx={{ backgroundColor: 'black', padding: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}

        >
          <LogoMovail />
          <Typography variant="body1" color="white">
            Contact us
          </Typography>
        </Stack>
      </Box>

      <AppBar position="static" color='primary'>
        <Toolbar sx={{display:"flex", justifyContent:'center',alignItems:'center',marginBottom:2}}>
        <Stack direction="column"
        spacing={1}
        >

        <Stack 
        direction='row'
        justifyContent='space-between'
        spacing={{xs:17,sm:10,md:80}}
        
              >
          

          <MenuNavMovail/>
          <Button sx={{ color: "white" }} variant="text" color="primary" startIcon={<PersonOutlineIcon />}>
            Login / Register
          </Button>
          </Stack>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search entiere store here..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Stack>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
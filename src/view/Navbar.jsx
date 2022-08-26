import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor: '#6794E0'}}>
    <AppBar position="static" sx={{ backgroundColor: '#6794E0'}}>
      <Toolbar variant="dense">   
      <Grid container>
      <Grid item xs={2}>
      <Typography variant="h6" color="inherit" component="div">
          Menu
        </Typography>
      </Grid> 
      <Grid item xs={6}>
      <Typography variant="h6" color="inherit" component="div">
          User Name
        </Typography>
      </Grid> 
      <Grid item xs={4}>
      <Typography variant="h6" color="inherit" component="div">
          Sales Report
        </Typography>
      </Grid> 
      </Grid>        
      </Toolbar>
    </AppBar>
  </Box>
  )
}



import React from 'react'
import NavBar from './Navbar'

export const home = () => {
  
  return (
    <>
   <Grid container>
      <Grid item xs={4}>
      <Typography variant="h6" color="inherit" component="div">
          Menu
        </Typography>
      </Grid> 
      <Grid item xs={4}>
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
    </>
  )
}

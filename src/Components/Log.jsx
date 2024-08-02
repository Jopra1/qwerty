  import React from 'react'
  import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
  import FormGroup from '@mui/material/FormGroup';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Checkbox from '@mui/material/Checkbox';
  import Link from '@mui/material/Link';



  const Log = () => {
    const paperstyle2={padding :'20px 30px' ,width:300};
    return (
      <>
      <Grid>
        <Paper elevation ={20} style ={paperstyle2}>
          <Grid align='center'>
          <Avatar></Avatar>
          <h2>Login</h2>
        
        <Typography variant='caption'>Please fill this form to Login</Typography>
        </Grid>
        <form>
          <TextField fullWidth variant="standard" label='Username' placeholder='Enter your Username'></TextField>
          
          <TextField fullWidth variant="standard" label='Password'placeholder='Enter Password'></TextField>
          <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
    
      </FormGroup>
  

          <Button type='submit' variant='contained'>Login</Button>
          <Typography >
                      <Link href="#" >
                          Forgot password ?
                  </Link>
                  </Typography>
                  <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
        </form>
        </Paper>
      </Grid>
    
      </>
    )
  }

  export default Log
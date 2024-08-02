import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'

const Sign = () => {
  const paperstyle={padding :'20px 30px' ,width:300};
  return (
    <>
    <Grid>
      <Paper elevation ={20} style ={paperstyle}>
        <Grid align='center'>
        <Avatar></Avatar>
        <h2>Sign Up</h2>
      
      <Typography variant='caption'>Please fill this form to create an account</Typography>
      </Grid>
      <form>
        <TextField fullWidth variant="standard" label='Name' placeholder='Enter your Name'></TextField>
        <TextField fullWidth variant="standard" label='Email'placeholder='Enter your Email'></TextField>
        <TextField fullWidth variant="standard" label='Phone No'placeholder='Enter your Phone No'></TextField>
        <TextField fullWidth variant="standard" label='Password'placeholder='Enter Password'></TextField>
        <TextField fullWidth variant="standard" label='Confirm Password' placeholder='Verify Password'></TextField>
        <FormGroup>
     
      <FormControlLabel required control={<Checkbox />} label="I accept  the terms and conditions" />
     
    </FormGroup>
        <Button type='submit' variant='contained'>Sign Up</Button>
      </form>
      </Paper>
    </Grid>
  
    </>
  )
}

export default Sign
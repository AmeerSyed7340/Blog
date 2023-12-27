import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginDialog from './LoginDialog';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function handleLogin(){
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  function handleSignup(){
    console.log("pressed signup");
  }

  function handleFormSubmit(){
    console.log("Form Submitted");
    // Add logic to handle form submission
    handleClose();
  }
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Title
            </Typography>
            <Button color="inherit" onClick={handleLogin}>Login</Button>
            <Button color="inherit" onClick={handleSignup}>Sign Up</Button>
          </Toolbar>
        </AppBar>

        <LoginDialog open={open} onClose={handleClose} onFormSubmit={handleFormSubmit}/>
      </Box>
    );
  }
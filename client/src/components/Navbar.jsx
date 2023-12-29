import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginDialog from './LoginDialog';
import { useState } from 'react';
import CreateDialog from './CreateDialog';
import CreateBlog from './CreateBlog';
import RetrieveUserBlog from './RetrieveUserBlogs';

export default function NavBar({ authorize_flag, setAuthorize_flag }) {
  const [open, setOpen] = useState(false);
  const [signupOpen, setsetupOpen] = useState(false);

  function handleLogin() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setsetupOpen(false);
  }

  function handleSignup() {
    setsetupOpen(true);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title
          </Typography>
          {!authorize_flag && <Button color="inherit" onClick={handleLogin}>Login</Button>}
          {!authorize_flag && <Button color="inherit" onClick={handleSignup}>Sign Up</Button>}
          {authorize_flag && <CreateBlog />}
          {authorize_flag && <RetrieveUserBlog />}
        </Toolbar>
      </AppBar>
      <CreateDialog open={signupOpen} onClose={handleClose} />
      <LoginDialog open={open} onClose={handleClose} setAuthorize_flag={setAuthorize_flag} />
    </Box>
  );
}
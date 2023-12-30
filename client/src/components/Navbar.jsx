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
import { useNavigate } from 'react-router-dom';

export default function NavBar({ authorize_flag, setAuthorize_flag }) {
  const [open, setOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setsignupOpen(false);
  }

  function handleSignup() {
    setsignupOpen(true);
  }

  function handleBlogBtn(){
    navigate('/');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:'pointer'}} onClick={handleBlogBtn}>
            Blogs
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
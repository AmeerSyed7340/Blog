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
import { useAuth } from '../contexts/AuthContext';

export default function NavBar({ authorize_flag, setAuthorize_flag }) {
   //create setUser using context to pass to createBlog
   const {setUser} = useAuth();
  const [open, setOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);
  const navigate = useNavigate();

  async function endpoint_call() {
    //console.log(Username, Password)
    try {
      const response = await fetch("http://127.0.0.1:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "Guest",
          password: "asdf1234"
        })
      });
      const data = await response.json();
      if (response.status == 200) {
        console.log(response, data);        
        setAuthorize_flag(true);    
        //Pass on the username to make it globally accessible
        setUser("Guest");  
      }else{
        setAuthorize_flag(false);
      }

    } catch (e) {

      console.error(e);
    }
  }

  function handleLogin() {
    setOpen(true);
  }

  function handleGuestLogin(){
    endpoint_call();
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
          {!authorize_flag && <Button color="inherit" onClick={handleGuestLogin}>Guest Login</Button>}
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
// LoginDialog.js
import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from '../contexts/AuthContext';

const LoginDialog = ({ open, onClose, onFormSubmit, setAuthorize_flag }) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  //create setUser using context to pass to createBlog
  const {setUser} = useAuth();

  async function endpoint_call() {
    //console.log(Username, Password)
    try {
      const response = await fetch("http://127.0.0.1:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${Username}`,
          password: `${Password}`
        })
      });
      const data = await response.json();
      if (response.status == 200) {
        console.log(response, data);
        setLogin(false);
        onClose();
        setAuthorize_flag(true);
        setUser(Username);
      }else{
        setLogin(true);
        setAuthorize_flag(false);
      }

    } catch (e) {

      console.error(e);
    }
  }
  return (
    <Dialog open={open} onClose={()=>{setLogin(false); onClose()}}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e)=>{setUsername(e.target.value)}}
          error = {login}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          onChange={(e)=>{setPassword(e.target.value)}}
          error = {login}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={endpoint_call}>Login</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;

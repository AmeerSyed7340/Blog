// LoginDialog.js
import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const CreateDialog = ({ open, onClose }) => {
  const [data, setData] = useState([]);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  async function endpoint_call () {
    console.log(Username, Password)
    try{
      const response = await fetch("http://127.0.0.1:3000/api/users", {
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
      if(response.status != 500){
        console.log(response);
        onClose();
      }
      
    }catch(e){
      console.error(e);
    }
    
    
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign-up</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          type="text"
          fullWidth
          variant="standard"
          onChange = {(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          onChange={(e)=>setPassword(e.target.value)}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={endpoint_call}>Sign-up</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
    
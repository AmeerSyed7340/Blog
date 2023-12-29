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
  const [UsernameExists, setUsernameExists] = useState(false);
  const [PasswordValid, setPasswordValid] = useState(false);

  async function endpoint_call () {
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
        setUsernameExists(false);
        onClose();
      }else{
        setUsernameExists(true);
      }
      
    }catch(e){
      console.error(e, enpointcall);
    }
    
    
  }

  const handleValidation = (e) => {
    /*
    Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.
    Matches	
    1234 | asdf1234 | asp123
    */
    const reg = new RegExp("^(?=.*\d).{4,8}$");
    console.log(reg.test(e.target.value))
    return reg.test(e.target.value)

  };

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
          required={true}
          onChange = {(e) => setUsername(e.target.value)}
          error = {UsernameExists}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          required={true}
          onChange={(e)=>{
            {/*check validation*/}
            if(handleValidation(e)) {
              setPassword(e.target.value);
              setPasswordValid(false);
            } else {
              setPasswordValid(true)
            } 
          }}
          error = {PasswordValid}
          
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{onClose(); setUsernameExists(false);}}>Cancel</Button>
        {/*if error on password Textfield is false do endpoint_call*/}
        <Button onClick= {()=>{if(!PasswordValid){endpoint_call()}}}>Sign-up</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
    
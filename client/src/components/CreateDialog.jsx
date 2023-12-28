// LoginDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const CreateDialog = ({ open, onClose, onFormSubmit }) => {
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
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onFormSubmit}>Sign-up</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
    
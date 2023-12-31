import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CreateBlogDialog({ open, handleClose, endpoint_call, setTitle, setContent, title, content }) {
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const goToHomePage = () => {
    navigate('/');
  }

  // Custom onClose handler that ignores outside clicks
  const handleOnClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      handleClose();
    }
  };

  return (
    <Dialog open={open}
      onClose={handleOnClose}
      disableEscapeKeyDown      
    >
      <DialogTitle>Create Blog</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Blog Title"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          margin="dense"
          id="content"
          label="Blog Content"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="standard"
          value={content}
          onChange={handleContentChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          handleClose();
          goToHomePage();
        }}>Cancel</Button>
        <Button onClick={endpoint_call}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

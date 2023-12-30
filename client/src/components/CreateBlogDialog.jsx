import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function CreateBlogDialog({ open, handleClose, endpoint_call, setTitle, setContent, title, content}) {
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };


  return (
    <Dialog open={open} onClose={handleClose}>
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={endpoint_call}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

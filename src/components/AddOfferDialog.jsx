import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Input } from '@material-ui/core';

export default function AddOfferDialog(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false)
    if (!title || !description || !email || !phone){
      alert("please fill out all fields")
    }else{
      let descriptionHeader = description.substring(0, 10)
      descriptionHeader += " ..."
  
      props.addOffer({ title, descriptionHeader, description, phone, email, viewing: 0 })
    }
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'setTitle') {
      setTitle(value)
    } else if (name === 'setDescription') {
      setDescription(value)
    } else if (name === 'setPhone') {
      setPhone(value)
    } else {
      setEmail(value)
    }
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a new offer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">new offer</DialogTitle>
        <DialogContent>
          <Input
            autoFocus
            margin="dense"
            name="setTitle"
            value={title}
            placeholder="title"
            onChange={handleInput}
            fullWidth
          />
          <Input
            autoFocus
            margin="dense"
            name="setDescription"
            value={description}
            inputProps={{
              maxLength: 200,
            }}
            placeholder="description"
            onChange={handleInput}
            fullWidth
          />
          <Input
            autoFocus
            margin="dense"
            name="setPhone"
            value={phone}
            placeholder="Phone"
            onChange={handleInput}
            fullWidth
          />
          <Input
            autoFocus
            margin="dense"
            name="setEmail"
            value={email}
            placeholder="email"
            onChange={handleInput}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

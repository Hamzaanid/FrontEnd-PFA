import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Popup({open,close,varOpen,attribute,navigate}) {

  return (
    <div>
      <Dialog
        open={varOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title" sx={
            {
                pl:1,
            }
        }>
          {attribute.name}
        </DialogTitle>
        <DialogContent sx={
            {
                pl:1,
            }
        }>
          <DialogContentText id="alert-dialog-description">
           - {attribute.description} <br/>
           - none
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Annuler</Button>
          <Button onClick={navigate} autoFocus>
            Reclamer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function Popup2({open,close,varOpen,attribute,navigate}) {

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
          <Typography variant="body1" sx={{bgcolor:'#87D08D',p:1}} gutterBottom>
            Places disponible : {126}
          </Typography>
          <Typography variant="body1" sx={{bgcolor:'red',p:1}}>
            Places Occupées : {396-126}
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Annuler</Button>
          <Button onClick={navigate} autoFocus>
            Consulter 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
const socket = io('');
export default function Popup2({close,varOpen,attribute,navigate}) {
   const initialState = {
    num_available_spots: 0,
    total_spots : 396
  };
  const [dataPython,setDataPython]= useState(initialState)
  useEffect(() => {
    socket.on('connect', () => {
        console.log('popup Connected to server');
      });
    socket.on('newMessage', (data) => {
      if(dataPython.num_available_spots !== data.num_available_spots){
        setDataPython({
            num_available_spots:data.num_available_spots,
            total_spots : data.total_spots
          });
        }
    });

    socket.on('disconnect', () => {
      console.log('popup Disconnected from server');
    });
  }, [dataPython]);

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
            Places disponible : {dataPython.num_available_spots}
          </Typography>
          <Typography variant="body1" sx={{bgcolor:'red',p:1}}>
            Places Occupées : {dataPython.total_spots - dataPython.num_available_spots}
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
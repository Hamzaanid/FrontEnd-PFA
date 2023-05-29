import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export default function Popup({open,close,varOpen}) {
    const navigate = useNavigate();
    const auth = useAuth();
    const logout = ()=>{
      auth.logout();
      navigate('/login',{replace:true});
    }
  return (
    <div>
      <Dialog
        open={varOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={
            {
                pl:1,
            }
        }>
          <Alert severity="warning">
            Are you sure!!
            </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Annuler</Button>
          <Button onClick={logout} autoFocus>
            confirme
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
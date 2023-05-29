import React, { useState } from 'react';
import { TextField, Button,CardHeader } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { useNavigate ,useLocation } from 'react-router-dom';
import { useAuth } from '../../Compenents/Auth/auth';

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const Location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirectPath = Location.state?.path || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    auth.login({email:email,password:password});
    setEmail('');
    setPassword('');
    navigate(redirectPath,{replace:true});
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card variant="outlined">
      <CardHeader title="Titre de la carte" />
        <CardContent>
        <form
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: '300px',
          marginTop: 1,
        }}
      >
        <TextField
        size='small'
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          margin="normal"
        />
        <TextField
        size='small'
          label="Mot de passe"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          margin="normal"
        />
        <Button
        size='small'
          type="submit"
          variant="contained"
          sx={{ marginTop: 2,bgcolor:"black" }}
        >
          Se connecter
        </Button>
      </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;

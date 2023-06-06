import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submit data
    // ...
  };

  return (
    <Box display="flex" justifyContent="center">
      <form onSubmit={handleSubmit}>
        <Box sx={{mt:5}}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required fullWidth size="small"
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required fullWidth size="small"
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required fullWidth size="small"
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required fullWidth size="small"
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required fullWidth size="small"
            margin="normal"
          />
          
          <Button type="submit"
           variant="contained"
            color="primary"
            size="small"
            >
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUpForm;

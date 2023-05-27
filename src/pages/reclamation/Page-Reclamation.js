import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'



export default function PageReclamation() {
    // const navigate = useNavigate()
    const [title,setTitle] = useState('');
    const [Details,setDetails] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(title && Details){
            const Reclamation = {
                title : title,
                details:Details
            }
            console.log(Reclamation)
        }   
    }

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Add Reclamation
            </Typography>
            <Box
                component="form"
                sx={{
                    //'& > :not(style)': { m: 1, width: '60%' },
                    '.MuiTextField-root': { m: 1, width: '90%' },
                    '.MuiButton-root': { m: 1,px:1 }
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                size='small'
                    onChange={(e)=>{setTitle(e.target.value)}}
                    label='Reclamation Title'
                    color='secondary'
                    variant='outlined'
                    fullWidth
                    required
                ></TextField>
                <TextField
                size='small'
                    onChange={(e)=>{setDetails(e.target.value)}}
                    label='Details'
                    color='secondary'
                    variant='outlined'
                    multiline
                    rows={4}
                    fullWidth
                    required
                ></TextField>
                <Button
                size='small'
                    type='submit'
                    color='primary'
                    variant='contained'
                >
                    Submit
                </Button>
            </Box>

        </Container>
    );
}
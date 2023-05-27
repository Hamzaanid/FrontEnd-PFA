import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import { makeStyles } from 'tss-react/mui';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";

// const useStyles = makeStyles(() => {

//     return {
//         btn: {
//             backgroundColor: 'violet',
//             fontSize: 60,
//             '&:hover': {
//                 backgroundColor: 'blue',
//             },
//             p:2,
//         }
//     }
// });

export default function PageReclamation() {
  // const navigate = useNavigate()
  // const classes = useStyles();
  const [title, setTitle] = useState("");
  const [Details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && Details) {
      const Reclamation = {
        title: title,
        details: Details,
      };
      console.log(Reclamation);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Reserver un chambre
      </Typography>
      <Box
        component="form"
        sx={{
          //'& > :not(style)': { m: 1, width: '60%' },
          ".MuiTextField-root": { m: 1, width: "95%" },
          ".MuiButton-root": { m: 1, px: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Reclamation Title"
          color="secondary"
          variant="outlined"
          fullWidth
          required
          size="small"
        ></TextField>
        <TextField
          size="small"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          label="Details"
          color="secondary"
          variant="outlined"
          multiline
          fullWidth
          required
        ></TextField>
        <Button size="small" type="submit" color="primary" variant="contained">
          envoyer
        </Button>
      </Box>
    </Container>
  );
}

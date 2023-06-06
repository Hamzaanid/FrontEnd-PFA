import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import axios from "axios";

export default function PageReclamation() {
  // const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && Details) {
      axios
        .post("reclamations/create", {
          title: title,
          detail: Details,
        })
        .then(res => {
          if (res.status === 201) {
            setTitle("");
            setDetails("");
            setOpen(true);
            setTimeout(function () {
              setOpen(false);
            }, 3000);
            
          }
        }).catch(err=>{
            console.log("check connexion")
        });
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
        Add Reclamation
      </Typography>
      <Collapse in={open}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          La réclamation a été effectuée avec succès.
        </Alert>
      </Collapse>
      <Box
        component="form"
        sx={{
          //'& > :not(style)': { m: 1, width: '60%' },
          ".MuiTextField-root": { m: 1 },
          ".MuiButton-root": { m: 1, px: 1 },
          mr: { lg: "50%", sm: "35%", xs: 0 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          size="small"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Reclamation Title"
          color="secondary"
          variant="outlined"
          value={title}
          fullWidth
          required
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
          rows={3}
          fullWidth
          value={Details}
          required
        ></TextField>
        <Button
          size="small"
          type="submit"
          sx={{
            backgroundColor: "black",
          }}
          variant="contained"
        >
          envoyer
        </Button>
      </Box>
    </Container>
  );
}

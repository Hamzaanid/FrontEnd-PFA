import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import Input from "@mui/material/Input"

export default function PageReclamation() {
  // const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [lien, setLien] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && Details) {
      const Reclamation = {
        title: title,
        details: Details,
        file:file,
        lien:lien
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
        ajouter Annoncement
      </Typography>
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
          label="title annoncement"
          color="secondary"
          variant="outlined"
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
          required
        ></TextField>
        <TextField
        size="small"
        type="file"
        id="file-input"
        label="image"
        fullWidth
        InputLabelProps={{
            shrink: true,
          }}
        onChange={(e) => {
            setFile(e.target.files[0]);
          }}
      />
      <TextField
          size="small"
          onChange={(e) => {
            setLien(e.target.value);
          }}
          label="lien"
          color="secondary"
          variant="outlined"
          fullWidth
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

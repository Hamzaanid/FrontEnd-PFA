import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
const Niv = [
  {
    value: "1A",
    label: "1A",
  },
  {
    value: "2A",
    label: "2A",
  },
  {
    value: "3A",
    label: "3A",
  },
];
const batim = [
  {
    value: "A",
    label: "Batiement A",
  },
  {
    value: "B",
    label: "Batiement B",
  },
  {
    value: "C",
    label: "Batiement C",
  },
  {
    value: "D",
    label: "Batiement D",
  },
  {
    value: "E",
    label: "Batiement E",
  },
];

export default function PageReclamation() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [niveau, setNiveau] = useState("");
  const [cin, setCin] = useState("");
  const [dateNaiss, setDateNaiss] = useState("");
  const [batiment, setBatiment] = useState("");
  const [chambre, setChambre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (prenom && nom && niveau) {
      const Reclamation = {
        prenom: prenom,
        nom: nom,
        cin: cin,
        dateNaiss: dateNaiss,
        niveau: niveau,
        batiment: batiment,
        chambre: chambre,
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
          // '& > :not(style)': { m: 1, width: '60%' },
          ".MuiTextField-root": { m: 1 },
          ".MuiButton-root": { m: 1, px: 1 },
          mr: { sm: "35%", xs: 0, lg: "50%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
          label=" Prénom"
          color="secondary"
          variant="outlined"
          fullWidth
          required
          size="small"
        ></TextField>
        <TextField
          size="small"
          onChange={(e) => {
            setNom(e.target.value);
          }}
          label=" Nom"
          color="secondary"
          variant="outlined"
          multiline
          fullWidth
          required
        ></TextField>
        <TextField
          onChange={(e) => {
            setCin(e.target.value);
          }}
          label=" CIN"
          color="secondary"
          variant="outlined"
          fullWidth
          required
          size="small"
        ></TextField>
        <TextField
          onChange={(e) => {
            setDateNaiss(e.target.value);
          }}
          size="small"
          fullWidth
          value={dateNaiss}
          label="Date de naissance"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          size="small"
          select
          label="Niveau"
          value={niveau}
          onChange={(e) => {
            setNiveau(e.target.value);
          }}
          helperText="Please select your currency"
        >
          {Niv.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          size="small"
          select
          label="Batiment"
          value={batiment}
          onChange={(e) => {
            setBatiment(e.target.value);
          }}
          helperText="ici le nombre de chambre"
        >
          {batim.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          onChange={(e) => {
            setChambre(e.target.value);
          }}
          label="Numero de chambre"
          color="secondary"
          variant="outlined"
          multiline
          fullWidth
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

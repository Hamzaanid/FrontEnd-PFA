import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const none = [
  {
    value: "chambre",
    label: "chambre",
  },
  {
    value: "etudiant",
    label: "étudiant",
  }
];

export default function PageReclamation() {
  const [typeCherche, setTypeCherche] = useState("etudiant");
  const [numOUnom, setnumOUnom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeCherche && numOUnom) {
      const recherche = {
        typeCherche: typeCherche,
        numOUnom: numOUnom,
      };
      console.log(recherche);
    }
  };

  return (
    <Container>
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
          fullWidth
          size="small"
          select
          label="charcher par"
          value={typeCherche}
          onChange={(e) => {
            setTypeCherche(e.target.value);
          }}
        >
          {none.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          onChange={(e) => {
            setnumOUnom(e.target.value);
          }}
          label={typeCherche === "chambre" ? "numero de chambre" : "nom étudiant"}
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
          chercher
        </Button>
      </Box>
    </Container>
  );
}

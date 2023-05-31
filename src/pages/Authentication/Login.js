import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Card, CardContent,Collapse,IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Compenents/Auth/auth";
import CardMedia from "@mui/material/CardMedia";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logoEnsias from "../../assets/final.png";
const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const Location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const redirectPath = Location.state?.path || "/";


  const handleSubmit = (event) => {
    event.preventDefault();
    if(email && password)
    {
      auth.login({ email: email, password: password });
      setEmail("");
      setPassword("");
      navigate(redirectPath, { replace: true });
    }else{
      setOpen(true);
    }
  
};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card variant="outlined" sx={{ m: 1 }}>
      <Collapse in={open}>
        <Alert
          severity="warning"
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
          il faut remplir les deux champs
        </Alert>
      </Collapse>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ bgcolor: "black" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "red" }}
              >
                Gestion Compus
              </Typography>
              <CardMedia
                sx={{ maxWidth: 70, border: "none" }}
                component="img"
                src={logoEnsias}
                alt="My Image"
              />
            </Toolbar>
          </AppBar>
        </Box>

        <CardContent sx={{bgcolor:"#faeaec"}}>
          <form
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              maxWidth: "300px",
              marginTop: 1,
            }}
          >
            <TextField
              size="small"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              margin="normal"
            />
            <TextField
              size="small"
              label="Mot de passe"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
            />
            <Button
              size="small"
              type="submit"
              variant="contained"
              sx={{ marginTop: 2, bgcolor: "black", color: "red" }}
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

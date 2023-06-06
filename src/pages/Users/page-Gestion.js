import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const GestionUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Hamza Anid', email: 'hamza_anid@um5.ac.ma' },
    { id: 2, name: 'Nouhaila atabet', email: 'nouhaila_atabet@um5.ac.ma' },
    // Ajoutez d'autres utilisateurs ici
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setOpenPopup(true);
  };

  const handleSaveChanges = () => {
    // Effectuer la logique de sauvegarde des modifications
    if (selectedUser) {
      const updatedUser = { ...selectedUser, name: editedName, email: editedEmail };
      const updatedUsers = users.map((user) => (user.id === selectedUser.id ? updatedUser : user));
      setUsers(updatedUsers);
      handleClosePopup();
    }
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
    setEditedName('');
    setEditedEmail('');
    setOpenPopup(false);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Gestion des utilisateurs
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button sx={{
                    bgcolor:"black",
                    color:"#ffffff",
                    mr:1,
                    '&:hover':{bgcolor:"#8A5858",}
                  }}
                  variant="outlined" size="small" onClick={() => handleEditUser(user)}>
                    Modifier
                  </Button>
                  <Button  sx={{
                    bgcolor:"black",
                    color:"#ffffff",
                    '&:hover':{bgcolor:"#8A5858",}
                  }}
                  variant="outlined" size="small" onClick={() => handleDeleteUser(user.id)}>
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Modifier l'utilisateur</DialogTitle>
        <DialogContent>
          <TextField
          size='small'
            label="Nom"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
          size='small'
            label="Email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
          size='small'
            label="nouveau password"
            fullWidth
            margin="normal"
            type='password'
          />
          <TextField
          size='small'
            label="confirme le nouveau password"
            fullWidth
            margin="normal"
            type='password'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveChanges} variant="contained">
            Sauvegarder
          </Button>
          <Button onClick={handleClosePopup} variant="contained">
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GestionUsers;

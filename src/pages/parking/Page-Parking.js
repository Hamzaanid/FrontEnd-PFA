import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

// const socket = io('http://localhost:3000'); // URL du serveur Socket.IO

const ParkingPage = () => {
//   const [parkingData, setParkingData] = useState(null);

  // useEffect(() => {
  //   // Écouter les mises à jour des données de parking depuis le serveur Socket.IO
  //   socket.on('parkingUpdate', (data) => {
  //     setParkingData(data);
  //   });

  //   // Nettoyage de l'écouteur lors du démontage du composant
  //   return () => {
  //     socket.off('parkingUpdate');
  //   };
  // }, []);

  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ display: 'flex',justifyContent:'center', height: '30%',margin:"2% 0 0 0" }}>
      <Card sx={{width:{xs:'98%',sm:'85%'}}}>
        <CardContent>
          <Typography variant="h5" sx={{color:'#FF2424'}} gutterBottom>
            Date : {currentDate}
          </Typography>
          <Typography variant="h6" sx={{bgcolor:'#87D08D',p:2}} gutterBottom>
            Places Libres : {20}
          </Typography>
          <Typography variant="h6" sx={{bgcolor:'red',p:2}}>
            Places Occupées : {30}
          </Typography>
          {/* <Typography variant="body1" gutterBottom>
            Pourcentage d'Occupation : {occupancyPercentage}%
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ParkingPage;

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Typography, Card, CardContent } from '@mui/material';
const socket = io('');
const ParkingPage = () => {
  const initialState = {
    num_available_spots: 0,
    total_spots : 396
  };
  const [dataPython,setDataPython]= useState(initialState)
  useEffect(() => {
    socket.on('connect', () => {
        console.log('Connected to server');
      });
    socket.on('newMessage', (data) => {
      if(dataPython.num_available_spots !== data.num_available_spots){
        setDataPython({
            num_available_spots:data.num_available_spots,
            total_spots : data.total_spots
          });
        }
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }, [dataPython]);

  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ display: 'flex',justifyContent:'center', height: '30%',margin:"2% 0 0 0" }}>
      <Card sx={{width:{xs:'98%',sm:'85%'}}}>
        <CardContent>
          <Typography variant="h5" sx={{color:'#FF2424'}} gutterBottom>
            Date : {currentDate}
          </Typography>
          <Typography variant="h6" sx={{bgcolor:'#87D08D',p:2}} gutterBottom>
            Places Libres : {dataPython.num_available_spots}
          </Typography>
          <Typography variant="h6" sx={{bgcolor:'red',p:2}}>
            Places Occupées : {dataPython.total_spots - dataPython.num_available_spots}
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

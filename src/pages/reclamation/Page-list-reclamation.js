import React, { useEffect, useState } from "react";
import CardReclamation from "../../Compenents/Reclamation/Card-reclamation.js";
import Container from "@mui/material/Container";
import axios from "axios"

export default function PageListReclamation(){
    const [data, setData] = useState([]);
     useEffect(() =>{
        
         axios.get('/reclamations')
            .then( (res) => {
                setData(res.data.reclamation);
            })
            .catch((err) => {
                console.log("check connexion");
            })
    },[data]);
    
    const handlTraited = (id)=>{
        axios.get('/reclamations')
            .then( (res) => {
                setData(res.data.reclamation);
            })
            .catch((err) => {
                console.log("check connexion");
            })
    }
    return (
        <Container>
            {
            data.map((item,index)=>(
             <CardReclamation 
                   key={index}
                   item={item}
                   handlTraited={handlTraited}
                   />
                   )
                )
            }  
        </Container>   
    )
}
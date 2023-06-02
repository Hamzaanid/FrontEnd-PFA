import React, { useEffect, useState } from "react";
import CardAnnonce from "../../Compenents/Card-listeAnnonce";
import Container from "@mui/material/Container";
import img from "./../../assets/final.png"

export default function PageListReclamation(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const dataFromApi = [
            {title : "title 1", body:"details hhd ..",lien:"ensias.com",file:img},
            {title : "title 2", body:"details .."},
            {title : "title 3", body:"details .."},
            {title : "title 4", body:"details .."},
            {title : "title 5", body:"details .."},
        ]
        setData(dataFromApi);
    },[]);

    return (
        <Container>
            {
            data.map((item,index)=>(
                <CardAnnonce 
                   key={index} 
                   title={item.title} 
                   body={item.body}
                   lien={item.lien}
                   file={item.file}
                   />
                   )
                )
            }  
        </Container>   
    )
}
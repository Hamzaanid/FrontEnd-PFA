import React, { useEffect, useState } from "react";
import CardReclamation from "../../Compenents/Reclamation/Card-reclamation.js";
import Container from "@mui/material/Container";

export default function PageListReclamation(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const dataFromApi = [
            {title : "title 1 de recmlamation", Details:"details .."},
            {title : "title 2 de recmlamation", Details:"details .."},
            {title : "title 3 de recmlamation", Details:"details .."},
            {title : "title 4 de recmlamation", Details:"details .."},
            {title : "title 5 de recmlamation", Details:"details .."},
        ]
        setData(dataFromApi);
    },[]);

    return (
        <Container>
            {
            data.map((item,index)=>(
                <CardReclamation 
                   key={index} 
                   title={item.title} 
                   Details={item.Details}
                   />
                   )
                )
            }  
        </Container>   
    )
}
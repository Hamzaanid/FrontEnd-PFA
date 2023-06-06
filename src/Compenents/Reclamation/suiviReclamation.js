import React, { useEffect, useState } from "react";
import CardReclamation from "./CrdTraitedReclamation.js";
import Container from "@mui/material/Container";
import axios from "axios";

export default function PageListReclamation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/reclamations/AllTraited")
      .then((res) => {
        setData(res.data.reclamationsTraitees);
      })
      .catch((err) => {
        console.log("check connexion");
      });
  }, [data]);

  return (
    <Container>
      {data.map((item, index) => (
        item && <CardReclamation key={index} item={item} />
      )
      )}
    </Container>
  );
}

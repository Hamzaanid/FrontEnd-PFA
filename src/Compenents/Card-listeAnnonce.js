import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea, CardActions, Link } from "@mui/material";

export default function CardAnnonce({body,title,lien,file}) {
  return (
    <Card sx={{ width:{sm:"98%",md:"70%",marginBottom:4} }}>
      <CardActionArea>
        {file && <CardMedia 
            component="img" 
            height="140" 
            image={file}
            alt="green iguana" 
            />
            }
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        lien && <CardActions>
             <Link 
            href={lien}
            color="inherit">
            {"link"}
            </Link>
        </CardActions>
      }
    </Card>
  );
}

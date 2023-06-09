import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import toDate from "../../utils/forDate.js";

import axios from "axios";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({item,handlTraited}) {
  const [expanded, setExpanded] = React.useState(false);
  const idItem = item.id;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const Traited = ()=>{
    axios.put('/reclamations/Traited/' + idItem)
            .then( (res) => {
                console.log("traited");
            })
            .catch((err) => {
                console.log("check connexion");
            })
      handlTraited();
  }

  return (
    <Card sx={{ m: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Box>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        }
        title={item.title}
        subheader={toDate(item.createdAt)}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {item.detail} 
          
          <IconButton
              aria-label="Traiter"
              sx={{ marginLeft: 1, color: "black" }}
              onClick={Traited}
            >
              <TaskAltIcon />
            </IconButton></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

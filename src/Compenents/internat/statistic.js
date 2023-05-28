import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function statistic() {
  return (
    <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 1, lg: 3 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: "100%", bgcolor: "#542222", color: "white" }}>
          <CardContent>
            <Typography variant="p">nombre de place disponible</Typography>
            <Typography variant="h6">100</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: "100%", bgcolor: "#542222", color: "white" }}>
          <CardContent>
            <Typography variant="p">nombre de place disponible</Typography>
            <Typography variant="h6">50</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

import React from "react";
import { Grid } from "@mui/material";
import SalesOverview from "../../src/components/dashboard/SalesOverview";

const Index = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
    </Grid>
  );
};

export default Index;

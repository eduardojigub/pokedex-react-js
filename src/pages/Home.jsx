import React from "react";
import Navbar from "../components/Navbar/index";
import PokemonCard from "../components/PokemonCard/index";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth='false'>
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

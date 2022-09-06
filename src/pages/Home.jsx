import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/index";
import PokemonCard from "../components/PokemonCard/index";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth='false'>
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

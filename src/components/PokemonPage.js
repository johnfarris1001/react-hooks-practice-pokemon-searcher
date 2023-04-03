import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const API = 'http://localhost:3001/pokemon'

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setPokemon(data))
  }, [])

  function addNewPokemon(newPoke) {
    setPokemon([...pokemon, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm api={API} addNewPokemon={addNewPokemon} />
      <br />
      <Search setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={pokemon} searchTerm={searchTerm} />
    </Container>
  );
}

export default PokemonPage;

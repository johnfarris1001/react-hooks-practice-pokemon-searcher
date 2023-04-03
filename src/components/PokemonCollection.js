import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchTerm }) {
  const pokemonToDisplay = pokemon.filter(poke => {
    return poke.name.includes(searchTerm.toLowerCase())
  }).map(poke => {
    return <PokemonCard key={poke.id} poke={poke} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;

import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ api, addNewPokemon }) {
  const [newName, setNewName] = useState('')
  const [newHP, setNewHP] = useState('')
  const [newFront, setNewFront] = useState('')
  const [newBack, setNewBack] = useState('')

  function handleSubmit() {
    const newPokemon = {
      name: newName,
      hp: newHP,
      sprites: {
        front: newFront,
        back: newBack
      }
    }

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
      .then(r => r.json())
      .then(newPoke => addNewPokemon(newPoke))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            fluid label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            value={newHP}
            onChange={e => setNewHP(e.target.value)}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            value={newFront}
            onChange={e => setNewFront(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            value={newBack}
            onChange={e => setNewBack(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

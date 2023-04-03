import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const [sprite, setSprite] = useState(true)

  function flipCard() {
    setSprite(!sprite)
  }

  return (
    <Card onClick={flipCard}>
      <div>
        <div className="image">
          <img src={sprite ? poke.sprites.front : poke.sprites.back} alt={poke.name} />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

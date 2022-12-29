import React from "react";
import { Card } from "./styles";

export const PokemonCard = ({ data }) => {
  return (
    <Card>
      <div className="image">
        <img
          alt="pokemon-img"
          src={data?.sprites?.other?.dream_world?.front_default}
        />
      </div>
      <div className="details">
        <span>Name : {data.name}</span>
        <span>Height : {data.height}</span>
        <span>Weight : {data.weight}</span>
        <span>Base Experience : {data.base_experience}</span>
        <span>
          Abilities :{" "}
          {data.abilities.map(({ ability }) => ability.name).join(", ")}
        </span>
      </div>
    </Card>
  );
};

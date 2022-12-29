import React from "react";
import { PokemonCard } from "../Component/pokemonCard";
import Search from "../Component/Search";
import useFetch from "../Hooks/useFetch";
import { Container, Error, Loading } from "./styles";

const HomePage = () => {
  const { data, loading, error, getData } = useFetch();

  return (
    <Container>
      <Search getData={getData} />
      {error && !loading && <Error>{error}</Error>};
      {loading && <Loading>Loading...</Loading>}
      {data?.name && !loading && <PokemonCard data={data} />}
    </Container>
  );
};

export default HomePage;

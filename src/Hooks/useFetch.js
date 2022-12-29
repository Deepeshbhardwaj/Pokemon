import { useState } from "react";
import { POKEMON_BASE_URL } from "../Constants";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (endpoint) => {
    try {
      setLoading(true);
      const response = await fetch(`${POKEMON_BASE_URL}/${endpoint}`);
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (e) {
      setError("Pokemon Not Found");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getData,
  };
};

export default useFetch;

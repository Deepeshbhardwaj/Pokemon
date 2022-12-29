import React, { useRef } from "react";
import { Button, Form, Input } from "./styles";

function Search({ getData }) {
  const ref = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (ref.current.value) {
      getData(`pokemon/${ref.current.value.toLowerCase()}`);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={onFormSubmit}>
        <Input ref={ref} placeholder="Search for a movie..." />
        <Button type="submit">
          <img alt="search" src="search.png" height="15" />
        </Button>
      </Form>
    </div>
  );
}

export default Search;

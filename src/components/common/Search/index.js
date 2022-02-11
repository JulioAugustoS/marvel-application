import React from "react";

import { Container } from "./styles";
import { Input, Button } from "..";

const Search = ({ color }) => {
  return (
    <Container>
      <Input placeholder="Pesquisar..." borderColor={color} />
      <Button backgroundColor={color}>Pesquisar</Button>
    </Container>
  );
};

export { Search };

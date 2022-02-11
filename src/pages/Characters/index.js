import React from "react";

import { Container } from "./styles";
import { Header, Banner, Title, Search } from "../../components/common";

import bannerImg from "../../assets/images/banner-characters.png";

const Characters = () => {
  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#C51402">Personagens</Title>
      <Search color="#C51402" />
    </Container>
  );
};

export { Characters };

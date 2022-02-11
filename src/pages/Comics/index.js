import React from "react";

import { Container } from "./styles";
import { Header, Banner, Title, Search } from "../../components/common";

import bannerImg from "../../assets/images/banner-comics.png";

const Comics = () => {
  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#0F2034">Quadrinhos</Title>
      <Search color="#0F2034" />
    </Container>
  );
};

export { Comics };

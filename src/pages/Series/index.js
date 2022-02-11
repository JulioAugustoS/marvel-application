import React from "react";

import { Container } from "./styles";
import { Header, Banner, Title, Search } from "../../components/common";

import bannerImg from "../../assets/images/banner-series.png";

const Series = () => {
  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#061B51">Séries</Title>
      <Search color="#061B51" />
    </Container>
  );
};

export { Series };

import React, { useEffect, useState } from "react";
import request from "../../config/request";
import { PUBLIC_KEY, createHash } from "../../config";

import { Content } from "../../global/style.global";
import { Container } from "./styles";
import {
  Header,
  Banner,
  Title,
  Search,
  Card,
  Loading,
} from "../../components/common";

import bannerImg from "../../assets/images/banner-comics.png";

const Comics = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  const findComics = async () => {
    try {
      const timestamp = Number(new Date());
      const hash = createHash(timestamp);

      const { data } = await request.get(
        `/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setComics(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR: ", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    findComics();
  }, []);

  if (loading) {
    return <Loading title="Carregando Quadrinhos..." bg="#0F2034" />;
  }

  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#0F2034">Quadrinhos</Title>
      <Search color="#0F2034" />
      <Content>
        {comics.map((comic, index) => (
          <Card
            key={index}
            bg="#0F2034"
            name={comic.title}
            photo={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Comics };

import React, { useEffect, useState } from "react";
import request from "../../config/request";
import { PUBLIC_KEY, createHash } from "../../config";

import { Content } from "../../global/style.global";
import { Container } from "./styles";
import { Header, Banner, Title, Search, Card } from "../../components/common";

import bannerImg from "../../assets/images/banner-characters.png";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const findCharacters = async () => {
    const timestamp = Number(new Date());
    const hash = createHash(timestamp);

    try {
      const { data } = await request.get(
        `/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setCharacters(data.data.results);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    findCharacters();
  }, []);

  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#C51402">Personagens</Title>
      <Search color="#C51402" />
      <Content>
        {characters.map((character) => (
          <Card
            bg="#C51402"
            name={character.name}
            photo={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Characters };

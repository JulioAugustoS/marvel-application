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

import bannerImg from "../../assets/images/banner-characters.png";

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [saveSearch, setSaveSearch] = useState("");
  const [isSearch, setIsSearch] = useState(true);

  const findCharacters = async () => {
    const timestamp = Number(new Date());
    const hash = createHash(timestamp);

    try {
      const { data } = await request.get(
        `/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setCharacters(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR: ", err);
      setLoading(false);
    }
  };

  const findCharactersByFilter = async () => {
    if (!search.length) {
      return alert("Por favor, digite um nome para pesquisar");
    }

    setSaveSearch(search);
    setIsSearch(false);
    const timestamp = Number(new Date());
    const hash = createHash(timestamp);

    setLoading(true);

    try {
      const { data } = await request.get(
        `/characters?ts=${timestamp}&nameStartsWith=${search}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setCharacters(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    findCharacters();
  }, []);

  const resetCharacters = () => {
    findCharacters();
    setSearch("");
    setIsSearch(true);
  };

  useEffect(() => {
    if (search !== saveSearch) {
      setIsSearch(true);
    }
  }, [search, saveSearch]);

  return (
    <Container>
      {loading && (
        <Loading title="Carregando Personagens..." bg="rgba(197,20,2,0.9)" />
      )}
      <Header />
      <Banner image={bannerImg} />
      <Title color="#C51402">Personagens</Title>
      <Search
        color="#C51402"
        btnTitle={isSearch ? `Pesquisar` : `Resetar`}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={() =>
          isSearch ? findCharactersByFilter() : resetCharacters()
        }
      />
      <Content>
        {characters.map((character, index) => (
          <Card
            key={index}
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

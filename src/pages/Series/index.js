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

import bannerImg from "../../assets/images/banner-series.png";

const Series = () => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);

  const findSeries = async () => {
    try {
      const timestamp = Number(new Date());
      const hash = createHash(timestamp);

      const { data } = await request.get(
        `/series?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setSeries(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    findSeries();
  }, []);

  if (loading) {
    return <Loading title="Carregando Séries..." bg="#061B51" />;
  }

  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#061B51">Séries</Title>
      <Search color="#061B51" />
      <Content>
        {series.map((serie, index) => (
          <Card
            key={index}
            bg="#061B51"
            name={serie.title}
            photo={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Series };

import React from 'react';
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import data from '../../celebrities.json';

import Carousel from '../../components/UI/Carousel/Carousel';

export const HomepageView = () => (
    <main className="main">
      <Header></Header>
      <Carousel></Carousel>
      <section className="cards">
        {data.map(celebrity => (
          <Card key={celebrity.id} image={celebrity.image} title={celebrity.name}></Card>
        ))}
      </section>
    </main>
)

import React from 'react';
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import data from '../../celebrities.json';

export const HomepageView = () => (
    <main className="main">
      <Header></Header>
      <section className="cards">
        {data.map(celebrity => (
          <Card key={celebrity.id} image={celebrity.image} title={celebrity.name} reads={celebrity.age} author="Mary Walton"></Card>
        ))}
      </section>
    </main>
)

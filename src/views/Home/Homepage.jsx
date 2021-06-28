// Import libraries
import React from 'react';
// Import components
import Header from "../../components/Header/Header";
import { Home } from '../../components/Home/Home';

import Carousel from '../../components/UI/Carousel/Carousel';
import HomeCard from '../../components/UI/HomeCard/HomeCard';

export const HomepageView = () => (
  <main className="main">
    <Header></Header>
    <Carousel></Carousel>
    <HomeCard></HomeCard>
    <section className="cards">
      <Home />
    </section>
  </main>
)

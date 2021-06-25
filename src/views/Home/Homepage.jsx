// Import libraries
import React from 'react';
// Import components
import Header from "../../components/Header/Header";
import { Home } from '../../components/Home/Home';

export const HomepageView = () => (
  <main className="main">
    <Header></Header>
    <section className="cards">
      <Home />
    </section>
  </main>
)

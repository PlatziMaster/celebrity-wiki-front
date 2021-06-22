import React from 'react';
import Card from "../../components/Card";
import Header from "../../components/Header";
import "../../styles/components/home/_home.scss";
import "../../styles/components/home/_home-desktop.scss";

export const HomepageView = () => (
    <main className="main">
      <Header></Header>
      <section className="cards">
        <Card image="" title="Tesla failed to stop Musk tweets, says regulator" reads="5 mins read" author="Mary Walton"></Card>
        <Card image="" title="Tesla failed to stop Musk tweets, says regulator" reads="5 mins read" author="Mary Walton"></Card>
        <Card image="" title="Tesla failed to stop Musk tweets, says regulator" reads="5 mins read" author="Mary Walton"></Card>
      </section>
    </main>
)

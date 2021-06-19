import React from 'react';
import SearchBar from "../../components/SearchBar";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import Logo from "../../assets/images/Logo.png";
import "../../styles/components/home/_home.scss"

export const HomepageView = () => (
    <main>
      <img src={Logo} alt="Logo People news"></img>
      <SearchBar></SearchBar>
      <Menu></Menu>
      <section className="cards">
        <Card image="" title="Tesla failed to stop Musk tweets, says regulator" reads="5 mins read" author="Mary Walton"></Card>
        <Card image="" title="Tesla failed to stop Musk tweets, says regulator" reads="5 mins read" author="Mary Walton"></Card>
      </section>
    </main>
)

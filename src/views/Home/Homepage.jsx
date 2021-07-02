// Import libraries
import React from 'react';
import { connect } from 'react-redux';
// Import components
import { Header } from "../../components/Header/Header";
import { Carousel } from '../../components/UI/Carousel/Carousel';
import { SearchBar } from "../../components/UI/SearchBar/SearchBar";
import { Nav } from "../../components/Nav/Nav";
import { Home } from '../../components/Home/Home';
import { HomeArtists } from '../../components/Home/HomeArtists';

export const View = ({ category }) => (
  <main className="main">
    <Header />
    <Carousel />
    <SearchBar />
    <Nav />
    {category === 'celebrities' ?
      <Home />
      :
      <HomeArtists />
    }
  </main>
)

// Map state from global state to component props
const mapStateToProps = state => ({
  category: state.celebritiesReducer.category,
});

export const HomepageView = connect(mapStateToProps, null)(View);

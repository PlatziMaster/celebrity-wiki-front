// Import libraries
import React from 'react';
import { connect } from 'react-redux';
// Import components
import Header from "../../components/Header/Header";
import { Home } from '../../components/Home/Home';
import { HomeArtists } from '../../components/Home/HomeArtists';

import Carousel from '../../components/UI/Carousel/Carousel';

export const View = ({ category }) => (
  <main className="main">
    <Header />
    <Carousel />
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
